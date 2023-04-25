const mongoose = require('mongoose')

const connectionString =  'mongodb+srv://venkatasaicharana:Charan1010@mernprojects.ocovsoh.mongodb.net/TaskManager?retryWrites=true&w=majority';

const connectDB = (url) =>{
    mongoose.connect(connectionString)
    .then(()=>console.log('Connected to DB'))
    .catch((err)=>console.log(err))
}

module.exports = connectDB;