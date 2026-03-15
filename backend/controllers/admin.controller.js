const userModel = require("../models/user.model");

// 1. Get Dashboard Data
const getDashboardData = async (req, res) => {
  try {
    // सारे यूज़र्स लाएँ (पासवर्ड छोड़कर) और सबसे नए यूज़र को ऊपर रखें
    const users = await userModel
      .find()
      .select("-password")
      .sort({ createdAt: -1 });

    // 🟢 Calculations
    const totalUsers = users.length;

    const totalCaptions = users.reduce(
      (sum, user) => sum + (user.captionCount || 0),
      0,
    );

    // 48 hours calculation
    const fortyEightHoursAgo = Date.now() - 48 * 60 * 60 * 1000;
    const activeUsers = users.filter(
      (user) => new Date(user.lastLogin).getTime() > fortyEightHoursAgo,
    ).length;

    return res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalCaptions,
        activeUsers,
        users, // पूरी लिस्ट भी भेज रहे हैं Table के लिए
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// 2. Delete User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Admin खुद को डिलीट ना कर ले, इसका चेक
    if (req.user._id.toString() === id) {
      return res
        .status(400)
        .json({ success: false, message: "You cannot delete yourself!" });
    }

    await userModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { getDashboardData, deleteUser };
