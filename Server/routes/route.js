const express = require('express')

const router = express.Router()

const categorycontroller = require('../controller/categorycontroller')
const customercontroller = require('../controller/customercontroller')
const productcontroller = require('../controller/productcontroller')
const reviewcontroller = require('../controller/reviewcontroller')

router.get('/', (req,res) =>{
    res.send("Hello!!!!!!")
})

router.get('/addnewcategory',(req,res)=>{
    res.send('add new category')
})

router.get('/addnewcustomer',(req,res)=>{
    res.send('add new customer')
})

router.get('/addnewproduct',(req,res)=>{
    res.send('add new product')
})

router.get('/addnewreview',(req,res)=>{
    res.send('add new review')
})

// API Paths for Category

router.get('/api/category',categorycontroller.find)
router.post('/api/category',categorycontroller.create)

// API paths for Customer

router.get('/api/customer',customercontroller.find)
router.post('/api/customer',customercontroller.create)

// API paths for Product

router.get('/api/product',productcontroller.find)
router.post('/api/product',productcontroller.create)

// API paths for Review

router.get('/api/review',reviewcontroller.find)
router.post('/api/review',reviewcontroller.create)

module.exports = router
