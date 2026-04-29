import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.get('/products', (req, res) => {
    res.send('This is the products page');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.post('/contact', (req, res) => {
    res.send('Contact form submitted');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});