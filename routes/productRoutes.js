const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// ================================
// GET 1: Obtener todos los productos
// ================================
router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ================================
// GET 2: Obtener un producto por productId
// ================================
router.get("/product/:productId", async (req, res) => {
    try {
        const product = await Product.findOne({ productId: req.params.productId });

        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ================================
// INSERT (POST): Crear un nuevo producto
// ================================
router.post("/product", async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ================================
// UPDATE (PUT): Actualizar un producto por productId
// ================================
router.put("/product/:productId", async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { productId: req.params.productId },
            req.body,
            { new: true } // devuelve el actualizado
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json(updatedProduct);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ================================
// DELETE: Eliminar un producto por productId
// ================================
router.delete("/product/:productId", async (req, res) => {
    try {
        const deleted = await Product.findOneAndDelete({ productId: req.params.productId });

        if (!deleted) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json({ message: "Producto eliminado correctamente" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
