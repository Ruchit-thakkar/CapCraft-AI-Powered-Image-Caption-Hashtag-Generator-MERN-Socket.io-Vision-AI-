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
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are an elite AI image caption generator similar to ChatGPT and Gemini.

Your job is to analyze an uploaded image and generate a high-quality Instagram caption.

Follow these rules strictly:

1. First identify the main subject of the image (person, anime character, object, etc.).
2. If the subject looks like a known anime character, celebrity, or fictional character, mention the name naturally.
3. If the identity is unknown, describe the person instead of guessing.
4. Also briefly describe the environment, background, or mood.
5. Focus mainly on the main subject if it dominates the image.
6. Do not invent unrealistic stories.
7. Write in a natural human tone suitable for social media.
8. The first line must grab attention.
9. Keep the caption engaging and modern.

Output format must be exactly:

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
          content: prompt,
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
