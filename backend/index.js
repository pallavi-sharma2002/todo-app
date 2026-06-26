import express from "express";
import taskRouter from "./routes/task.js"
import mongoConnect from "./lib/mongoConnect.js"
import dotenv from "dotenv";
import cors from "cors"


dotenv.config();

const app = express();
app.use(express.json())
app.use(cors({
    origin:true,
}))

// connecting to mongo using the function i have build it 
mongoConnect();





app.use("/api/task", taskRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on ${process.env.PORT || 5000}`);
});


