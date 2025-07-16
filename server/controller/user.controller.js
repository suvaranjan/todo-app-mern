import User from "../models/user.model.js";

// GET /api/user/profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// PUT /api/user/profile
export const updateProfile = async (req, res) => {
  try {
    const updates = {
      username: req.body.username,
      email: req.body.email,
    };

    const user = await User.findByIdAndUpdate(req.userId, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to update profile", error: err.message });
  }
};
