import mongoose from "mongoose";



const taskSchema = new mongoose.Schema({
    
    title:{ 
        type: String,
        required: true
    },
     description:{ 
        type: String,
        required: true
    }
}, { timestamps:true})


const TaskModel = mongoose.model("Task", taskSchema);
export default TaskModel