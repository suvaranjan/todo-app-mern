import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { getProfile, updateProfile } from "../controller/user.controller.js";

const router = express.Router();

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

export default router;
