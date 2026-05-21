const express = require("express");

const {
  createProduct,
  getProducts,
  deleteProduct,
} = require("../controllers/productController");

const upload = require("../middleware/upload");

const router = express.Router();

router.get("/", getProducts);

router.post(
  "/",
  upload.single("image"),
  createProduct
);

router.delete("/:id", deleteProduct);

module.exports = router;