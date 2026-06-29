import AddTask from "../components/AddTask";
import MyTasks from "../components/MyTask";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function ManageTask() {


    const [myAllTask, setMyTask] = useState();



    const getAllTask = async () => {

        const response = await fetch("http://localhost:5000/api/task/gettask", {
            method: "GET"
        });

        const data = await response.json();

        if (data.success === false) {
            toast.error(data.message)
            return;
        }

        setMyTask(data.data);

    }


    useEffect(() => {
        getAllTask();
    }, [])

    console.log(myAllTask)





    return (
        <>
            <AddTask  getAllTask={getAllTask} />
            <MyTasks myAllTask={myAllTask} getAllTask={getAllTask} />

        </>
    )
}
