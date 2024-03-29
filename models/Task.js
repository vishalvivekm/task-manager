const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    // name: String,
    // completed: Boolean,
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,   //default: false,: to test put's overwriting meaning
    },
})

module.exports = mongoose.model('Tasks', TaskSchema)
