import express from 'express';
import config from './config/config.js';
import productRoute from './routes/productRoute.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.use('/products', productRoute);

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.post('/contact', (req, res) => {
    res.send('Contact form submitted');
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});