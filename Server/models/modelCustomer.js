const mongoose = require('mongoose')

var customerschema = new mongoose.Schema({
    firstName:{ type:String, required:true},
    lastName:{ type:String, required:true},
    email:{ type:String, required:true, unique:true },
    contact:{ type:String, required:true},
    address: { type: String, },
    createdOn:{ type:Date, required:true, unique:true, default: Date.now },
    status: {type: Boolean, default: false},
    
})

const modelcustomer = mongoose.model('modelcustomer', customerschema)

module.exports = modelcustomer