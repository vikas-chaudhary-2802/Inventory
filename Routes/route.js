const express = require('express');
const router = express.Router();
const products = require('../Models/product');

// POST: Insert Product
router.post("/insertproduct", async (req, res) => {
    const { productName, ProductPrice, ProductBarcode } = req.body;

    try {
        const pre = await products.findOne({ ProductBarcode: ProductBarcode });
        if (pre) {
            res.status(422).json("Product is already added");
        } else {
            const addProduct = new products({ productName, ProductPrice, ProductBarcode });
            await addProduct.save();
            res.status(201).json("Product added successfully");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

// GET: Retrieve All Products
router.get("/getproducts", async (req, res) => {
    try {
        const allProducts = await products.find();
        res.status(200).json(allProducts);
    } catch (err) {
        console.log(err);
        res.status(500).json("Failed to fetch products");
    }
});

// DELETE: Delete Product by Barcode
router.delete("/deleteproduct/:barcode", async (req, res) => {
    const { barcode } = req.params;

    try {
        const deletedProduct = await products.findOneAndDelete({ ProductBarcode: barcode });
        if (deletedProduct) {
            res.status(200).json("Product deleted successfully");
        } else {
            res.status(404).json("Product not found");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Failed to delete product");
    }
});

module.exports = router;
