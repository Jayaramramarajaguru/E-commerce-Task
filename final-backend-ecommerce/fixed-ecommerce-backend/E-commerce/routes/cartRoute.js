const express = require("express");
const mongoose = require("mongoose");

const Cart = require("../models/Cart");

const router = express.Router();


// =============================
// ADD TO CART
// =============================
router.post("/", async (req, res) => {
  try {
    const {
      productId,
      title,
      image,
      description,
      price,
      qty,
    } = req.body;

    console.log(req.body,"req.bodyaddcart");
    

    // validation
    if (!productId) {
      return res.status(400).json({
        message: "productId is required",
      });
    }

    // already exists check
    const existingCart = await Cart.findOne({
      productId,
    });

    if (existingCart) {
      existingCart.qty += 1;

      await existingCart.save();

      return res.status(200).json({
        message: "Cart quantity updated",
        cart: existingCart,
      });
    }

    // create new cart
    const cart = new Cart({
      productId: new mongoose.Types.ObjectId(
        productId
      ),

      title,

      image,

      description,

      rate,

      qty: qty || 1,
    });

    await cart.save();

    res.status(201).json({
      message: "Product Added To Cart",
      cart,
    });
  } catch (error) {
    console.log(error, "ADD CART ERROR");

    res.status(500).json({
      message: error.message,
    });
  }
});


// =============================
// GET CART PRODUCTS
// =============================
router.get("/", async (req, res) => {
  try {
    const carts = await Cart.find().sort({
      createdAt: -1,
    });

    res.status(200).json(carts);
  } catch (error) {
    console.log(error, "GET CART ERROR");

    res.status(500).json({
      message: error.message,
    });
  }
});


// =============================
// REMOVE FROM CART
// =============================
router.delete("/:id", async (req, res) => {
  try {
    const cartItem = await Cart.findById(
      req.params.id
    );

    if (!cartItem) {
      return res.status(404).json({
        message: "Cart Item Not Found",
      });
    }

    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Product Removed From Cart",
    });
  } catch (error) {
    console.log(error, "DELETE CART ERROR");

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;