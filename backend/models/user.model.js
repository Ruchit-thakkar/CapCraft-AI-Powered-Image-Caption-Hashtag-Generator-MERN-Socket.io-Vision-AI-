const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },

    role: {
      type: String,
      // 👇 Added "admin" to the enum so the database accepts it as a valid role
      enum: ["user", "admin"],
      default: "user",
    },

    profileCompleted: {
      type: Boolean,
      default: false,
    },
    // ... पुराने fields (email, password, role) के नीचे यह डालें 👇
    captionCount: {
      type: Number,
      default: 0,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
