// 1️⃣ सबसे पहले dotenv को Load करें (ताकि नीचे की सभी फाइलों को API Key मिल सके)
const dotenv = require("dotenv");
dotenv.config();

// 2️⃣ बाकी सारे Core Packages
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");

// 3️⃣ Routes Import (अब इन्हें API Key मिल जाएगी)
const authRoutes = require("./routes/auth.routes");
const captionRoutes = require("./routes/caption.routes");
const adminRoutes = require("./routes/admin.routes");
const path = require("path");
// Connect to Database
connectDB();

const app = express();
const server = http.createServer(app);

// 🟢 Frontend URL (ध्यान दें: Vite का default port 5173 होता है, तो अगर आपका frontend 5173 पर है तो .env में FRONTEND_URL=http://localhost:5173 डालें)
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

// Socket.io Setup
const io = new Server(server, {
  cors: {
    origin: frontendUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

// Make 'io' accessible in our controllers (Very important for caption streaming)
app.set("io", io);

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  }),
);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/caption", captionRoutes);
app.use("/api/admin", adminRoutes);

// Socket.io Connection Event
io.on("connection", (socket) => {
  console.log(`🔌 User connected via Socket: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});
app.use(express.static(path.join(__dirname, "./public")));

// Start Server
const PORT = process.env.PORT || 5000;

app.get("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
