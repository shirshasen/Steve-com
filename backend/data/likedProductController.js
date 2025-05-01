import LikedProduct from "../models/likedProducts.model.js";
import Product from "../models/product.model.js";

export const addProductToLikes = async (userId, productId) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");

  let liked = await LikedProduct.findOne({ user: userId });

  if (!liked) {
    liked = new LikedProduct({
      user: userId,
      likedProducts: [{ product: productId }],
    });
  } else {
    const alreadyLiked = liked.likedProducts.some(
      (p) => p.product.toString() === productId
    );
    if (alreadyLiked) throw new Error("Product already liked");

    liked.likedProducts.push({ product: productId });
  }

  return await liked.save();
};

export const removeProductFromLikes = async (userId, productId) => {
  const liked = await LikedProduct.findOne({ user: userId });
  if (!liked) throw new Error("No liked products found for this user");

  liked.likedProducts = liked.likedProducts.filter(
    (p) => p.product.toString() !== productId
  );

  return await liked.save();
};

export const getLikedProducts = async (userId) => {
  const liked = await LikedProduct.findOne({ user: userId }).populate(
    "likedProducts.product"
  );
  if (!liked) return [];
  return liked.likedProducts;
};
