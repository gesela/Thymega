require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const method = require('method-override')
const app = express()
const PORT = 3000
const Product = require('./models/product')

// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_PW, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => console.log('Connected to Mongo'))

// Setup Engineze
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ===== Middleware =====
app.use(method('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))

// Use Express middleware to parse JSON.
app.use(express.json())


// ===== Routes =====

// Index, New, Delete, Update, Create, Edit, Show

// Index
app.get('/products', (req, res) => {
    // Query model to return all products
    Product.find({}, (err, allProducts) => {
        res.render('Index', {products: allProducts})
    })
})

// New
app.get('/products/new', (req, res) => {
    res.render('New');
});

//Delete
app.delete('/products/:id', (req, res) => {
   
    Product.findByIdAndDelete(req.params.id, (err) => {
        if (!err){
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

// Update
app.put('/products/:id', (req, res) => {
    req.body.isAvailable = req.body.isAvailable === 'on' ? true : false;
    
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
        if (!err) {
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

// Create
app.post('/products', (req, res) => {

    req.body.isAvailable = req.body.isAvailable === 'on' ? true : false;

        Product.create(req.body, (err, createdProduct) => {
        
            res.redirect('/products')
    })
})

// Edit 
app.get('/products/:id/edit', (req, res) => {

    Product.findById(req.params.id, (err, foundProduct) => {
        if (!err) {
            res.render('Edit', {product: foundProduct})
        } else {
            res.status(400).json(err)
        }
    })
})

// Show
app.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('Show', {product: foundProduct})
    } ) 
    
})

//Port
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))