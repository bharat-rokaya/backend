import fs from 'fs/promises';

const getAllProducts = async () => {
    try {
        const data = await fs.readFile('./data/products.json', 'utf-8');
        const products = JSON.parse(data);
        return products;
    } catch (error) {
        console.error('Error reading products:', error);
        throw new Error('Failed to read products');
    } 
};

export default { productService };