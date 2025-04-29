import express from "express";
import { getOrCreateCart, updateCart } from "../data/cartController.js";

const router = express.Router();

// GET /cart/:userId → Get or create user's cart
router.get("/:userId", async (req, res) => {
  try {
    const cart = await getOrCreateCart(req.params.userId);
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /cart/update → Update quantity or add/remove items
router.put("/update", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || quantity === undefined) {
      return res
        .status(400)
        .json({ error: "userId, productId, and quantity are required" });
    }

    const updatedCart = await updateCart(userId, productId, quantity);
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
