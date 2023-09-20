const express = require("express");
const router = express.Router();

const productController = require("../Controllers/product.controller");

router.post("/", productController.createProduct);
router.get("/allproduct", productController.getAllProduct);
router.get("/:id", productController.getProduct);

module.exports = router;
