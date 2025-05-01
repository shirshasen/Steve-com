import Cart from "../models/cart.model.js";
import Product from "../models//product.model.js";

// Create or get existing cart
export const getOrCreateCart = async (userId) => {
  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = new Cart({ user: userId, items: [], totalPrice: 0, totalItems: 0 });
    await cart.save();
  }
  return cart;
};

// Update cart: add/update/remove product
export const updateCart = async (userId, productId, quantity) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");

  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = new Cart({ user: userId, items: [] });
  }

  // Check if product already in cart
  const existingItemIndex = cart.items.findIndex(
    (item) => item.product.toString() === productId
  );

  if (quantity <= 0) {
    // Remove item if quantity is 0 or less
    if (existingItemIndex !== -1) {
      cart.items.splice(existingItemIndex, 1);
    }
  } else {
    if (existingItemIndex !== -1) {
      // Update quantity
      cart.items[existingItemIndex].quantity = quantity;
    } else {
      // Add new item
      cart.items.push({ product: productId, quantity });
    }
  }

  // Recalculate totals
  let totalPrice = 0;
  let totalItems = 0;
  for (const item of cart.items) {
    const prod = await Product.findById(item.product);
    if (prod) {
      totalPrice += prod.price * item.quantity;
      totalItems += item.quantity;
    }
  }

  cart.totalPrice = totalPrice;
  cart.totalItems = totalItems;

  await cart.save();
  return cart;
};
