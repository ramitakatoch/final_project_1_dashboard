var modelCategory = require('../models/modelCategory')

exports.create =(req,res) =>{
    // Validate request

    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"})
        .return
    }

    // New Category

    const category = new modelCategory({
        categoryName: req.body.categoryName,
        createdBy: req.body.createdBy,
        status: req.body.status
    })

    // Save category in database

    category.save(category)
    .then(
        data=>{
            // res.send(data)
            res.redirect('/addNewCategory')
        }
    ).catch(err =>{
        res.status(500).send({
            message:err.message||"Some error occured while creating a create operation"
        })
    })
}

// retrive and return all users/ retrive and return a single user
exports.find = (req,res) =>{
    if(req.query.id){
        const id = req.query.id

        modelCategory.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: "Not found user with id"+id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error retrieving category with id" + id})
        })
        
    }else{
        modelCategory.find()
        .then(user=>{res.send(user)})
        .catch(err=>{res.status(500).send({message: err.message || "Error Occurred while retrieving user information"})})
    }
}