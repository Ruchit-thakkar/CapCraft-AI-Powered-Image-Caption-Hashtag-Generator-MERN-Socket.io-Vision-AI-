const express = require("express");
const router = express.Router();
const multer = require("multer");

const authMiddleware = require("../Middlewares/auth.middleware");
const { generateCaption } = require("../controllers/caption.controller");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post(
  "/generate",
  authMiddleware, // ⭐ ADD THIS
  upload.single("image"),
  generateCaption,
);

module.exports = router;
