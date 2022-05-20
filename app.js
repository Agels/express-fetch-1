import express from 'express';

const app =  express();
import fetch from 'node-fetch';

const port = process.env.PORT || 3000;


app.set('view engine','ejs');
app.get('/', (req, res) => {
    res.render('home')
});


app.get('/users', (req, res) => {

    res.render('users')
});

app.post('/users', async (req, res) => {
     const response = await fetch('https://fakestoreapi.com/Users');
     const data = await response.json();

  res.send(data)

})

app.get('/products', (req, res) => {
    res.render('products')
});


app.post('/products', async (req, res) => {
    const response = await fetch('https://fakestoreapi.com/Products?limit=10');
    const data = await response.json();

 res.send(data)

})



app.listen(port, () => console.log(`running at : http://localhost:${port}`))

