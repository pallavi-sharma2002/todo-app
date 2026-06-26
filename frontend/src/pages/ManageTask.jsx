import { useState } from "react";
import AddTask from "../components/AddTask";
import MyTasks from "../components/MyTask";
 import { toast } from 'react-toastify';

export default function ManageTask() {
    const [loading , setLoading] = useState(false)


    const addTask = async (title, description) => {
        // e.preventDefault();
        setLoading(true)

        
        const response = await fetch("http://localhost:5000/api/task/addtask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        });

       

        const data = await response.json();

        if(data.success === false){
            setLoading(false)
            toast.error(data.message)
            return;
        }

        setLoading(false)
        toast.success(data.message);


    }

    return (
        <>
            <AddTask addTask={addTask} loading={loading} />
            <MyTasks />

        </>
    )
}
