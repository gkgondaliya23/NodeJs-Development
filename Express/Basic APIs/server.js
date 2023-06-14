const express = require('express');
const products = require('./Products/data.json');
const app = express();

app.use(express.json());

// Create products -> post method
app.post('/products', (req, res)=>{
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

// get all products -> get method
app.get('/products', (req, res)=>{
    res.status(200).json(products);
});

// get specific products -> get method
app.get('/products/:id', (req, res)=>{
    const id = +req.params.id;
    // console.log(id);
    const pro = products.find(p=>p.id === id);
    // console.log(pro);
    res.status(200).json(pro);
});

// update specific products -> put method
app.put('/products/:id', (req, res)=>{
    const id = +req.params.id;
    const proIndex = products.findIndex(p=>p.id === id);
    const product = products[proIndex]
    products.splice(proIndex, 1, {...req.body});
    res.status(200).json({product: 'updated'});
});

// update specific products -> patch method
app.patch('/products/:id', (req, res)=>{
    const id = +req.params.id;
    const proIndex = products.findIndex(p=>p.id === id);
    const product = products[proIndex]
    products.splice(proIndex, 1, {...product,...req.body});
    res.status(200).json({product: 'updated'});
});

//delete product -> delete method
app.delete('/products/:id', (req, res)=>{
    const id = +req.params.id;
    const proIndex = products.findIndex(p=>p.id === id);
    const product = products[proIndex];
    products.splice(proIndex, 1);
    res.status(200).json(product);
});


app.listen(7000, ()=>{
    console.log('listening on http://localhost:7000');
})