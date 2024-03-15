
const Task = require('../models/Task')
const getAllTasks = async (req,res) => {
    //res.send("get all task")
    try {
        const tasks = await Task.find({})
        res.status(201).json({tasks})   //res.status(201).json({tasks: tasks})
        // res.status(200).json({tasks, amount: tasks.length})
        //res.status(200).json({status:'success', data:{tasks, nbHits: tasks.length} })
    } catch (error) {
       res.status(500).json({msg: error})
    }
}
const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({msg: error})
    }

}

const getTask = async (req,res) => {
    // res.json({ id: req.params.id })
  try {

      const {id: taskID} = req.params
     // console.log(require('mongoose').Types.ObjectId.isValid(taskID))
      if (require('mongoose').Types.ObjectId.isValid(taskID)) {
          const task = await Task.findOne({_id: taskID});
          if (!task) {
              return res.status(404).json({msg: `no task with id: ${taskID}`})
          }
          res.status(201).json({task})
      } else {
          return res.json({msg: `passed id param ${taskID} is not valid objectId`})
      }
  } catch (error) {
      res.status(500).json({mssg: error})
  }


}

const updateTask = async (req,res) => {
    //res.send("update task")
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new: true,
            runValidators: true,
        })
        if(!task) {
            return res.status(404).json({msg: `No taks with id:  ${taskID}`})
        }
        res.status(200).json({task})
        //res.status(200).json({id:taskID, data:req.body})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const deleteTask = async (req,res) => {
    // res.send("delete Task")
    try {
       const {id: taskID} = req.params
       const task = await Task.findOneAndDelete({_id: taskID})
       if(!task) {
           return res.status(404).json({msg: `task with id ${taskID} not found`})
       }
       res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
// const editTask = async (req,res) => {
//     try{
//         const {id:taskID} = req.params
//         const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
//             new: true,
//             runValidators: true,
//             overwrite: true,   // important
//         })
//
//         if (!task) {
//             return res.status(404).json({msg: `No task with id: ${id}`})
//         }
//         res.status(200).json({task})
//     } catch (error) {
//         res.status(500).json({msg: error})
//     }
// }

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    getTask,
    deleteTask,
//    editTask,
}
// what is in our schema, that only gets passed and anything else gets ingnored.
// put: replace, overwrite
// patch >> : partial update
