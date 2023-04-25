const express = require('express');
const taskRouter = require('./routes/tasksRouter')
const connectDB = require('./db/connect')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;

// Including json middleware
app.use(express.json());

// using our router
app.use('/api/v1/tasks',taskRouter)

app.use(express.static('./public'));

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`server started on port ${port}...`);
        })

    } catch (err) {
        console.log(err);
    }
}

start()

