const mongoose = require('mongoose')

var categoryschema = new mongoose.Schema({
    categoryName:{ type:String, required:true},
    createdBy:{type:String, required:true},
    createdOn:{ type:Date, required:true, unique:true, default: Date.now },
    status: {type: String, default: "false"}
})

const modelcategory = mongoose.model('modelcategory', categoryschema)

module.exports = modelcategory