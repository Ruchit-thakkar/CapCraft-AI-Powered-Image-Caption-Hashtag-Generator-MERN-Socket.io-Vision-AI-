const { GoogleGenerativeAI } = require("@google/generative-ai");
const userModel = require("../models/user.model");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

    // respond immediately
    res.json({
      success: true,
      message: "AI processing started",
    });

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
    });

    const prompt = `
Analyze this image and generate an engaging Instagram caption.

Rules:
- Catchy first line
- Short engaging caption
- Natural tone
- Use emojis if appropriate
- Caption length: 2–3 lines

Generate exactly 5 hashtags.

Hashtag rules:
- lowercase only
- relevant to the image

Output format:

Caption:
<caption>

Hashtags:
#tag1 #tag2 #tag3 #tag4 #tag5
`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: req.file.mimetype,
          data: base64Image,
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();

    // send result to frontend
    io.to(socketId).emit("captionChunk", text);

    // increment caption usage
    await userModel.findByIdAndUpdate(req.user._id, {
      $inc: { captionCount: 1 },
    });

    io.to(socketId).emit("captionComplete", {
      success: true,
      fullText: text,
    });
  } catch (error) {
    console.error("Gemini error:", error);

    const io = req.app.get("io");

    if (req.body.socketId) {
      io.to(req.body.socketId).emit("captionError", {
        message: "AI failed to process image.",
      });
    }
  }
}

module.exports = { generateCaption };
