import Product from "../models/product.model.js";

export const createProduct = async (productData) => {
  const product = new Product(productData);
  const savedProduct = await product.save();
  return savedProduct;
};

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

export const updateProduct = async (productId, updatedData) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    updatedData,
    { new: true, runValidators: true }
  );
  if (!updatedProduct) {
    throw new Error("Product not found for update");
  }
  return updatedProduct;
};

export const deleteProduct = async (productId) => {
  const deletedProduct = await Product.findByIdAndDelete(productId);
  if (!deletedProduct) {
    throw new Error("Product not found for deletion");
  }
  return deletedProduct;
};

export const searchProductsByName = async (searchTerm) => {
  const products = await Product.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  return products;
};

export const filterProducts = async ({ minPrice, maxPrice, category }) => {
  const query = {};

  if (minPrice !== undefined && maxPrice !== undefined) {
    query.price = { $gte: minPrice, $lte: maxPrice };
  } else if (minPrice !== undefined) {
    query.price = { $gte: minPrice };
  } else if (maxPrice !== undefined) {
    query.price = { $lte: maxPrice };
  }

  if (category) {
    query.category = category;
  }

  const products = await Product.find(query);
  return products;
};
