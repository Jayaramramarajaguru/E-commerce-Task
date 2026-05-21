const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");

const createProduct = async (req, res) => {
  try {
    const uploadedImage =
      await cloudinary.uploader.upload(req.file.path);
console.log("uploadedImage",uploadedImage);

    const product = await Product.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      discount: req.body.discount,
      clothType: req.body.clothType,
      image: uploadedImage.secure_url,
    });

    res.status(201).json(product);
  } catch (error) {
    console.log("createprod error",error);
    
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
  deleteProduct,
};  