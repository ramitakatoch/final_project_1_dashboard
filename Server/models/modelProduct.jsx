const mongoose = require('mongoose')

var productschema = new mongoose.Schema({
    productName:{ type:String, required:true},
    productPrice:{ type:String, required:true},
    manufacture:{ type:String, required:true },
    quantity: String, 
    updatedOn: { type: Date, required: true, default: Date.now }
})

const modelproduct = mongoose.model('modelproduct', productschema)

module.exports = modelproduct