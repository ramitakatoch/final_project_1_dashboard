const mongoose = require('mongoose')

var productschema = new mongoose.Schema({
    productName:{ type:String, required:true},
    productPrice:{ type:String, required:true},
    manufacturer:{ type:String, required:true },
    quantity: { type:String}, 
    updatedOn: { type:Date, required:true, unique:true, default: Date.now },
})

const modelproduct = mongoose.model('modelproduct', productschema)

module.exports = modelproduct