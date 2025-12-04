import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); //pass empty {} to get all records
    res.status(201).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const addNewProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    res
      .status(400)
      .json({ success: false, message: "Please provide valid details" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save(); // save on DB
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "server " });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(404)
      .json({ success: false, message: "Product with id not found." });
  }
  try {
    const prodData = req.body;
    const updatedProd = await Product.findByIdAndUpdate(id, prodData, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProd });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Product with id not found." });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(201).json({ success: true, message: "Product is deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};
