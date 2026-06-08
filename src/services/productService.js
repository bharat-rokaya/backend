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
        throw { error: error.message };
    }
};

const createProduct = async (productData) => {
    try {
        return await Product.create(productData);
    } catch (error) {
        throw { error: error.message };
    }
};

const updateProduct = async (id, productData) => {
    try {
        const product = await Product.findByIdAndUpdate(id, productData, { new: true });
        return product;
    } catch (error) {
        throw { error: error.message };
    }
};

const deleteProduct = async (id) => {
    try {
        await Product.findByIdAndDelete(id);
        return { message: 'Product deleted successfully' };
    } catch (error) {
        throw { error: error.message };
    }
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };