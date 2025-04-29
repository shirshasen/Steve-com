import express from "express";
import {
  addProductToLikes,
  removeProductFromLikes,
  getLikedProducts,
} from "../data/likedProductController.js";

const router = express.Router();

router.post("/:productId", async (req, res) => {
  try {
    const userId = req.body.userId;
    const productId = req.params.productId;
    const updated = await addProductToLikes(userId, productId);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const userId = req.body.userId;
    const productId = req.params.productId;
    const updated = await removeProductFromLikes(userId, productId);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const liked = await getLikedProducts(userId);
    res.status(200).json(liked);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
