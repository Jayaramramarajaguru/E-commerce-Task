<<<<<<< HEAD
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    title: String,

    image: String,

    description: String,

    price: Number,

    qty: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

=======
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    title: String,

    image: String,

    description: String,

    price: Number,

    qty: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

>>>>>>> 4826aa4af46ba12daac8fab1faa11bf160fcfe2c
module.exports = mongoose.model("Cart", cartSchema);