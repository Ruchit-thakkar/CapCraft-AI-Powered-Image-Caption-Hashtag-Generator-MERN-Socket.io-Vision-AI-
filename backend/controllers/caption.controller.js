const Groq = require("groq-sdk");
const userModel = require("../models/user.model");
const sharp = require("sharp");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateCaption(req, res) {
  try {
    // 1️⃣ check image
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    const { socketId } = req.body;

    if (!socketId) {
      return res.status(400).json({
        success: false,
        message: "Socket ID required",
      });
    }

    const io = req.app.get("io");

    // 2️⃣ resize image using sharp
    const processedImage = await sharp(req.file.buffer)
      .resize({
        width: 1024,
        height: 1024,
        fit: "inside",
      })
      .jpeg({ quality: 80 })
      .toBuffer();

    const base64Image = processedImage.toString("base64");

    // respond immediately
    res.json({
      success: true,
      message: "AI processing started",
    });

    // 3️⃣ AI request
    const stream = await groq.chat.completions.create({
      model: "meta-llama/llama-4-maverick-17b-128e-instruct",

      messages: [
        {
          role: "system",
          content: `
You are an elite AI image caption generator similar to ChatGPT and Gemini.

Your job is to analyze an uploaded image and generate a high-quality Instagram caption.

Rules:

1. Identify the main subject in the image.
2. If it looks like a famous anime character, celebrity, or fictional character mention the name.
3. If identity is unknown describe the person instead of guessing.
4. Briefly mention the environment or mood.
5. Focus mainly on the main subject.
6. Make the caption engaging and social-media friendly.
7. The first line should grab attention.

Output format exactly:

Caption:
<instagram caption>

Hashtags:
#tag1 #tag2 #tag3 #tag4 #tag5

Rules for hashtags:
- exactly 5 hashtags
- all lowercase
- relevant to the image
`,
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analyze this image and generate an Instagram caption.",
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],

      stream: true,
    });

    let fullCaption = "";

    // 4️⃣ streaming response
    for await (const chunk of stream) {
      const text = chunk.choices?.[0]?.delta?.content || "";

      if (text) {
        fullCaption += text;

        io.to(socketId).emit("captionChunk", text);
      }
    }

    // 5️⃣ increment caption usage
    await userModel.findByIdAndUpdate(req.user._id, {
      $inc: { captionCount: 1 },
    });

    // 6️⃣ send final caption
    io.to(socketId).emit("captionComplete", {
      success: true,
      fullText: fullCaption,
    });
  } catch (error) {
    console.error("Groq error:", error);

    if (req.body.socketId) {
      const io = req.app.get("io");

      io.to(req.body.socketId).emit("captionError", {
        message: "AI failed to process image.",
      });
    }
  }
}

module.exports = { generateCaption };
