const Task = require("../models/Task.js")

exports.createTask = async(req,res,next)=>{
    try{
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(201).json({savedTask})
    }
    catch(error){
        next(error)
    }
};

exports.getAllTasks = async(req,res)=>{
    try{
        const allTasks = await Task.find();
        res.status(200).json(allTasks);
    }
    catch(error){
        next(error)
    }
}

exports.getSingleTask = async(req,res)=>{
    try{
        const singleTask = await Task.findById(req.params.id);
        if(!singleTask){
            return res.status(404).json({message:"Task not found"});
        }
        res.status(200).json(singleTask);
    }
    catch(error){
        next(error);
    }
}

exports.updateTask = async(req,res)=>{
    try{
        const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        if(!updateTask){
            return res.status(404).json({message:"Task not found"});
        }
        res.status(200).json(updateTask)
    }
    catch(error){
        next(error)
    }
}

exports.deleteTask = async(req,res)=>{
    try{
        const removeTask = await Task.findByIdAndDelete(req.params.id);
        if(!removeTask){
            res.status(404).json({message:"Task not found"});
        }
        res.status(200).json({message:"Task deleted Successfully"});
    }
    catch(error){
        next(error)
    }
}