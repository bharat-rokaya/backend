import fs from 'fs/promises';

const getAllProducts = async () => {
    try {
        const data = await fs.readFile(new URL('../data/products.json', import.meta.url), 'utf-8');
        const products = JSON.parse(data);
        return products;
    } catch (error) {
        console.error('Error reading products:', error);
        throw new Error('Failed to read products');
    }
};

const getProductById = async (id) => {
    try {
        const products = await getAllProducts();
        return products.find(product => product.id === id);
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw new Error('Failed to fetch product');
    }
};


export default { getAllProducts, getProductById };