import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
    });
    return res.status(201).json({
      success: true,
      message: "Created Product Successfully",
      product: product,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.body;

  try {
    if (!productId) {
      return res.status(400).json({ message: "please provide productId" });
    }

    const product = await Product.findOne({ id: Product._id });

    if (!product) {
      console.log("product is not found");
      return res.status(404).json({ message: "Product not Found" });
    }
    await Product.findByIdAndDelete(productId);
    return res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something Went Wrong Deleting Product" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    return res
      .status(200)
      .json({ message: "All Products Fetched Successfully", product: product });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong while Fetching Products" });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const productsByCategory = await Product.find({
      category: req.params.category,
    });

    if (productsByCategory.length === 0) {
      return res.status(404).json({ message: "Category Not Found" });
    }
    return res.status(200).json({
      message: "Catergory Found",
      products_catergory: productsByCategory,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong while fetching Category" });
  }
};
