require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const port = 3000
const connectDB = require('./db/connect')
require('dotenv').config()
// middleware
app.use(express.static('./public'))
app.use(express.json()) // if don't use it we won't have data in req.body: it's necessary to send body in json format while in post/put etc reqs

// routes
app.get('/hello', (req, res) => {
    res.send("Task manager app")
})
app.use('/api/v1/tasks', tasks) // base path: /api/v1/tasks

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}
start()


// details: 

// app.get('api/v1/tasks') - get all the tasks
// app.post('api/v1/tasks') - create a new task
// app.get('api/v1/tasks/:id') - get single task
// app.patch('api/v1/tasks/:id') - update task 
// app.delete('api/v1/tasks/:id') - delete task
