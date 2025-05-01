import express from "express";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";
import likedProductRoutes from "./likedProductRoutes.js";
import cartRoutes from "./cartRoutes.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/cart", cartRoutes);
router.use("/products", productRoutes);
router.use("/liked", likedProductRoutes);

export default router;
