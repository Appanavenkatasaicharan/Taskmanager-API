const express = require('express');
const taskRouter = require('./routes/tasksRouter')
const connectDB = require('./db/connect')
const app = express()
const port = 5000;

// Including json middleware
app.use(express.json());

// using our router
app.use('/api/v1/tasks',taskRouter)

app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.send('Hello world')
})

const start = async ()=>{
    try {
        await connectDB();
        app.listen(port,()=>{
            console.log(`server started on port ${port}...`);
        })

    } catch (err) {
        console.log(err);
    }
}

start()

