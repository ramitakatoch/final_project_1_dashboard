var modelcustomer = require('../models/modelCustomer')

exports.create = (req,res)=>{
    // Validate request

    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"})
        return
    }

    // New User

    const customer = new modelcustomer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
        createdOn: req.body.createdOn,
        status: req.body.status,
    })

    // save user in database

    customer.save(customer)
    .then(
        data =>{
            // res.send(data)
            res.redirect("/addnewcustomer")
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
        modelcustomer.findById(id)
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
        modelcustomer.find()
        .then(user =>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"Error Occured"})
        })
    }
}