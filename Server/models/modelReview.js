const mongoose = require('mongoose')

var reviewschema = new mongoose.Schema({
    productId:{ type:String, required:true},
    firstName:{ type:String, required:true},
    lastName:{ type:String, required:true},
    email:{ type:String, required:true, unique:true},
    message:{ type:String, required:true },
    status: {type: Boolean, default: false}
    
})

const modelreview = mongoose.model('modelreview', reviewschema)

module.exports = modelreview