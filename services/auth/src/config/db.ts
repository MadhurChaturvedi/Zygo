import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        
        await mongoose.connect(process.env.MONO_URL as string,{
            dbName:"Zygo"
        })
        console.log("connnected to mongodb 🦦")
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;

