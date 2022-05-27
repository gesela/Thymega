require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const productRoutes = require('./api/routes/routes/products')
const orderRoutes = require('./api/routes/routes/orders')

mongoose.connect(process.env.MONGO_PW, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => console.log('Connected to Mongo'))