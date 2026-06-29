import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


const mongoConnect = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected")
    }
    catch (error) {
        console.log(error)

    }

}

export default mongoConnect







