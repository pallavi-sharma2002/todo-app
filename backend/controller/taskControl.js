import TaskModel from "../models/task.js";



export const addTask = async(req, res)=>{
const {title , description } = req.body;

if(!title){
    res.status(404).json({success:false,message:"Title Required"})
    return
}
if(!description){
    res.status(404).json({success:false,message:"Description Required"})
    return
}

const newTask =  new TaskModel({
    title:title,
    description:description
})


const saveTask = await newTask.save()
if(!saveTask){
    res.status(404).json({success:false,message:"task not added"})
    return
}

    res.status(201).json({success:true,message:"task added sucessfully",data:saveTask})


}

export const  getTask = async()=>{

    const myTaskdata = await TaskModel.find({});
    if(!myTaskdata){
        res.status(404).json({success:false , message:"Task not found"})
        
    }

       res.status(200).json({success:true , message:"Task found", data:myTaskdata})



}


