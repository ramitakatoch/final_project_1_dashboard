const mongoose = require('mongoose')

var reviewschema = new mongoose.Schema({
    firstName:{ type:String, required:true},
    lastName:{ type:String, required:true},
    email:{ type:String, required:true, unique:true },
    message:{ type:String, required:true }
    
})

const modelreview = mongoose.model('modelreview', reviewschema)

module.exports = modelreview