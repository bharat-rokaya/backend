import express from 'express';
import fs from 'fs/promises';
import config from './config/config.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.get('/products', async (req, res) => {
    try {
        const products = await fs.readFile('src/data/products.json', 'utf8');
        res.json(JSON.parse(products));
    } catch (error) {
        res.status(500).json({ error: 'Failed to read products data' });
    }
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.post('/contact', (req, res) => {
    res.send('Contact form submitted');
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});