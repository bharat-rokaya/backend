import Product from '../models/Product.js';

const getAllProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductById = async (id) => {
    try {
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProduct = async (productData) => {
    try {
        return await Product.create(productData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default { getAllProducts, getProductById, createProduct };