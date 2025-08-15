const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const Task = new mongoose.model('Task',TaskSchema);

module.exports = Task;