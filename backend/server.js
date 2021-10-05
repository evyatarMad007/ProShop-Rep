import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js'
import products from './data/products.js';

dotenv.config();
const app = express();

connectDB()

app.get('/', (req, res) => {
    res.send('api is running...')
})

// send all products 
app.get('/api/products', (req, res) => {
    res.json(products)
})

// send a single product by id 
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));