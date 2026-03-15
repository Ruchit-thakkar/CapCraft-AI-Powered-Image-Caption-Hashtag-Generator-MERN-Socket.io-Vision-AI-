const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/auth.middleware");
const {
  getDashboardData,
  deleteUser,
} = require("../controllers/admin.controller");

// Middleware to restrict access
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res
      .status(403)
      .json({ success: false, message: "Not authorized as an admin" });
  }
};

router.get("/dashboard", authMiddleware, adminOnly, getDashboardData);
router.delete("/users/:id", authMiddleware, adminOnly, deleteUser);

module.exports = router;
