import express from "express"
import { addTask , getTask} from "../controller/taskControl.js";


const router = express.Router()

router.post("/addtask", addTask);
router.get("/gettask", getTask)





export default router;