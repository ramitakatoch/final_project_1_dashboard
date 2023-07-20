var modelproduct = require('../models/modelProduct')

exports.create = (req,res)=>{
    // Validate request

    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"})
        return
    }

    // New Product

    const product = new modelproduct({
        productName : req.body.productName,
        productPrice : req.body.productPrice,
        manufacturer : req.body.manufacturer,
        quantity : req.body.quantity,
        updatedOn : req.body.updatedOn,
    })

    // save user in database

    product.save(product)
    .then(
        data =>{
            // res.send(data)
            res.redirect("/addnewproduct")
        }
    ).catch(err =>{
        res.status(500).send({
            message:err.message||"Some error Occured while creating a create operation"
        })
    })
}

//retrive and return all users

exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id
        modelproduct.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Not found user with Id" +id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error retrieving user id" +id})
        })
    }else{
        modelproduct.find()
        .then(user =>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"Error Occured"})
        })
    }
}