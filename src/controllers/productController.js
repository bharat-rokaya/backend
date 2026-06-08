import productService from '../services/productService.js';

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.getProductById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProduct = async(req, res) => {
    try {
        const productId = req.params.id;
        const newProduct = await productService.updateProduct(productId, req.body);
        res.json(newProduct);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const result = await productService.deleteProduct(productId);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };