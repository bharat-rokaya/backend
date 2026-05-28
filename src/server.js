import express from 'express';

import config from './config/config.js';
import productRoute from './routes/productRoute.js';
import connectDB from './config/database.js';

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.use('/api/products', productRoute);

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.post('/contact', (req, res) => {
    res.send('Contact form submitted');
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});