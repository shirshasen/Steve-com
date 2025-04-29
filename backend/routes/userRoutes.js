import express from "express";
import { signupUser, loginUser } from "../data/userController.js"; // Adjust path

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const userData = req.body;
    const user = await signupUser(userData);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { emailOrMobile, password } = req.body;
    const user = await loginUser({ emailOrMobile, password });
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

export default router;
