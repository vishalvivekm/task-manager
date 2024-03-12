const express = require('express')
const router = express.Router();

const {getAllTasks,getTask, deleteTask, updateTask,createTask} = require('../controllers/tasks')
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router


// app.get('api/v1/tasks') - get all the tasks
// app.post('api/v1/tasks') - create a new task
// app.get('api/v1/tasks/:id') - get single task
// app.patch('api/v1/tasks/:id') - update task // we'll talk diff b/w put and patch
// app.delete('api/v1/tasks/:id') - delete task
