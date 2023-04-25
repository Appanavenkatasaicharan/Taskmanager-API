const getAllTasks = (req,res)=> {
    res.send('Sending all tasks')
}

const getSingleTask = (req,res)=>{
    res.send('Sending a specific task')
}

const createTask = (req,res)=>{
    res.send('adding a task')
}

const updateTask = (req,res)=>{
    res.send('Updating task')
}

const deleteTask = (req,res)=>{
    res.send('deleting task')
}

module.exports = { 
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}