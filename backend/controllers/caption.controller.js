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
An image has been uploaded by a user.

Image preview (base64 snippet):
${base64Image.substring(0, 1000)}

Analyze what is most likely happening in the image.

Create a highly engaging Instagram caption.

Rules:

- Identify the main subject first (person, anime character, object).
- If the subject looks like a famous anime or fictional character, mention the name.
- If not identifiable, describe the person instead.
- Briefly mention the environment or mood.
- Make the caption feel natural and social-media ready.
- Do NOT talk about technical things like "this image shows".

Caption length: 1–3 short paragraphs.

After the caption generate exactly 5 trending hashtags.

Output format:

Caption:
<caption>

Hashtags:
#tag1 #tag2 #tag3 #tag4 #tag5
`;

    const stream = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are an elite AI visual caption writer trained like ChatGPT and Gemini.

Your job is to create high-quality captions for images uploaded by users.

Follow these strict rules:

1. Carefully infer what the image likely contains.
2. Mention the main subject (person, character, object) if it is central in the image.
3. If the image contains a recognizable character (anime, celebrity, fictional character), mention the character name naturally.
4. If the character is not recognizable, describe the person instead of guessing.
5. Also briefly describe the environment or mood of the scene.
6. The caption must feel natural, human, emotional, and engaging.
7. The first line must hook the reader.
8. Avoid generic lifestyle sentences.
9. Do NOT invent unrelated stories.
10. Focus on what is visually happening in the image.

The output must be perfect for Instagram.
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
