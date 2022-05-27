const express = require('express');

const app =  express();
// import fetch from 'node-fetch';
app.use(express.json());

app.use(express.urlencoded({ extended: true }));



const port = process.env.PORT || 3000;
// const Productrouter = require("./app/product/routes");
// const ProductrouterV2 = require("./app/product-v2/routes");
require('./config/mongoose');
const ProductrouterV3 = require('./app/product-v3/routes');
const ProductrouterV4 = require('./app/product-v4/routes');
app.use(express.static('public'));

app.set('view engine','ejs');
app.get('/', (req, res) => {
    res.render('home')
});

// app.use("/api",Productrouter);
// app.use("/api/v2",ProductrouterV2);
app.use('/api/v3', ProductrouterV3);
app.use('/api/v4', ProductrouterV4);
// app.get('/users', (req, res) => {

//     res.render('users')
// });

// app.post('/users', async (req, res) => {
//      const response = await fetch('https://fakestoreapi.com/Users');
//      const data = await response.json();

//   res.send(data)

// })

// app.get('/products', (req, res) => {
//     res.render('products')
// });


// app.post('/products', async (req, res) => {
//     const response = await fetch('https://fakestoreapi.com/Products?limit=10');
//     const data = await response.json();

//  res.send(data)

// })



app.listen(port, () => console.log(`running at : http://localhost:${port}`))

