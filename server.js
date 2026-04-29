import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('hello from express');
});

app.get('/products', (req, res) => {
    res.send('Products page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/contact', (req, res) => {
    res.send('Contact page');
});

app.post('/contact', (req, res) => {
    res.send('Contact form submitted');
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});