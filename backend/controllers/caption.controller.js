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
You are a world-class social media strategist and viral Instagram caption expert.

A user uploaded an image.

Image data (base64 preview):
${base64Image.substring(0, 1000)}

Your job is to create a HIGHLY engaging Instagram caption that could perform well on social media.

Follow these rules carefully:

1. Write a catchy caption that grabs attention in the first line.
2. The caption should feel modern, emotional, and relatable.
3. Use emojis naturally where appropriate.
4. The caption should feel human-written and authentic.
5. Keep the caption between 1–3 short paragraphs.
6. After the caption, generate exactly 5 trending hashtags.
7. ALL hashtags must be lowercase.
8. Do NOT include explanations.

Output format:

Caption:
<instagram caption>

Hashtags:
#tag1 #tag2 #tag3 #tag4 #tag5
`;

    const stream = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
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
