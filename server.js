const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Task = require("./models/Task.js")
const Routes = require("./routes/Routes.js")
const error = require("./middlewares/error.js")

const app = express();
dotenv.config(); 

const PORT = 8000;
const mongo = process.env.MONGO_URI;

app.use(express.json());

mongoose.connect(mongo)
.then(()=>{
    console.log("Database connected");
})
.catch(err=>{
    console.log(err);
})

app.post("/test",(req,res)=>{
    console.log(req.body);
    res.send("recieved");
})

app.use('/api/tasks',Routes);

app.use(error);

app.listen(8000,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})