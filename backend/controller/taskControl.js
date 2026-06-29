import TaskModel from "../models/task.js";



export const addTask = async (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        res.status(404).json({ success: false, message: "Title Required" })
        return
    }
    if (!description) {
        res.status(404).json({ success: false, message: "Description Required" })
        return
    }

    const newTask = new TaskModel({
        title: title,
        description: description
    })


    const saveTask = await newTask.save()
    if (!saveTask) {
        res.status(404).json({ success: false, message: "task not added" })
        return
    }

    res.status(201).json({ success: true, message: "task added sucessfully", data: saveTask })


}

export const getTask = async (req, res) => {

    const myTaskdata = await TaskModel.find({});
    if (!myTaskdata) {
        return res.status(404).json({ success: false, message: "Task not found" })

    }

    res.status(200).json({ success: true, message: "Task found", data: myTaskdata })


}
export const completeTask = async (req, res) => {
    const { id } = req.params;

    const findmytask = await TaskModel.findById(id);

    if (findmytask.isCompleted === true) {
        const mycompletetask = await TaskModel.findByIdAndUpdate(id, { isCompleted: false }, { new: true });

        if (!mycompletetask) {
            return res.status(404).json({ success: false, message: "task not updated" });
        }

        res.status(200).json({ success: true, message: "task updated", data: mycompletetask });
    }

    else {
        const mycompletetask = await TaskModel.findByIdAndUpdate(id, { isCompleted: true }, { new: true });

        if (!mycompletetask) {
            return res.status(404).json({ success: false, message: "task not updated" });
        }
        res.status(200).json({ success: true, message: "task updated", data: mycompletetask });
    }
}

export const deleteTask = async (req, res) => {

    const { id } = req.params;

    const myTaskdelete = await TaskModel.findByIdAndDelete(id);

    if (!myTaskdelete) {
        return res.status(404).json({ success: false, message: "task not delete" })
    }
    res.status(200).json({ success: true, message: "task delete" })
}
export const updateTask = async(req , res)=>{
    const {id} = req.params;
    const {title, description} = req.body;
    
    const update = await TaskModel.findByIdAndUpdate(id, { title:title, description:description }, { new: true });

    if (!update) {
        return res.status(404).json({ success: false, message: "task not updated" });
    }
    res.status(200).json({ success: true, message: "task updated", data: update });
}
