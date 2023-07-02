const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI,{useNewURLParser:true, useUnifiedTopology:true})
        console.log(`MongoDB Connected : ${con.connection.host}`)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB