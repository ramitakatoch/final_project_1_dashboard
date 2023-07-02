const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')
const connectDB =require('./Server/database/connection')

const app = express()

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'))

// parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }))

// Database Connectivity
connectDB()

app.use('/', require('./Server/routes/route'))

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
})