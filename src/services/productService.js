import Product from '../models/Product.js';

const getAllProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        console.error(error);
    }
};

const getProductById = async (id) => {
    try {
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        console.error(error);
    }
};

const createProduct = async () => {
    return await Product.create({
        name: 'iPhone 16 Pro',
        brand: 'Apple',
        category: 'Smartphones',
        price: 180000,
    });
};

export default { getAllProducts, getProductById, createProduct };