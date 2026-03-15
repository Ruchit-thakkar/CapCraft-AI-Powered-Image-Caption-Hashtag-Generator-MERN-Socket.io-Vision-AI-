const Groq = require("groq-sdk");
const userModel = require("../models/user.model");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateCaption(req, res) {
  try {
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

    const base64Image = req.file.buffer.toString("base64");

    res.json({
      success: true,
      message: "AI processing started",
    });

    const prompt = `
A user uploaded an image.

Analyze the image carefully.

Tasks:
- Identify the main subject in the image.
- Mention the subject clearly.
- Briefly describe the environment or mood.
- Write a catchy Instagram caption.

Caption length: 1–3 short paragraphs.

Do not explain anything.

Generate exactly 5 hashtags.

Image:
data:image/jpeg;base64,${base64Image}
`;

    const stream = await groq.chat.completions.create({
      model: "meta-llama/llama-4-maverick-17b-128e-instruct",

      messages: [
        {
          role: "system",
          content: `
You are an elite AI image caption generator similar to ChatGPT and Gemini.

Your job is to analyze an uploaded image and generate a high-quality Instagram caption.

Rules:
- Identify the main subject first.
- If it looks like a known anime character or celebrity mention the name.
- Briefly describe the environment or mood.
- Focus mainly on the main subject.
- Make the caption social-media friendly.

Output format:

Caption:
<caption>

Hashtags:
#tag1 #tag2 #tag3 #tag4 #tag5
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

    for await (const chunk of stream) {
      const text = chunk.choices?.[0]?.delta?.content || "";

      if (text) {
        fullCaption += text;

        io.to(socketId).emit("captionChunk", text);
      }
    }

    // ✅ increment caption count
    await userModel.findByIdAndUpdate(req.user._id, {
      $inc: { captionCount: 1 },
    });

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
