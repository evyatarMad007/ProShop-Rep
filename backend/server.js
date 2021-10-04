const express = require('express');
const products = require('./data/products')

const app = express();


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


app.listen(5000, console.log('server is runnign on port 5000'));