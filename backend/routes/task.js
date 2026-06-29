import express from "express"
import { addTask , completeTask, getTask, deleteTask, updateTask} from "../controller/taskControl.js";


const router = express.Router()

router.post("/addtask", addTask);
router.get("/gettask", getTask);
router.put('/completetask/:id', completeTask);
router.delete("/deletetask/:id", deleteTask);
router.put('/updatetask/:id', updateTask);





export default router;