<<<<<<< HEAD
// backend/models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    discount: { type: Number, min: 0, max: 100, default: 0 },
    clothType: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

=======
// backend/models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    discount: { type: Number, min: 0, max: 100, default: 0 },
    clothType: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

>>>>>>> 4826aa4af46ba12daac8fab1faa11bf160fcfe2c
module.exports = mongoose.model("Product", productSchema,"Product");