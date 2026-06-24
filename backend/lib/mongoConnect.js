import mongoose from mongoose;
import dotenv from "dotenv"


const mongoConnect =async()=>{

try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connect")
}
catch(error){
    console.log(error)

}
    
}

export default mongoConnect







