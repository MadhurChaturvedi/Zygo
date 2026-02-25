import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.js"
// dotenv 
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Auth Service is running on PORT:${PORT} 🐠`);
    console.log(`http://localhost:5000`);
    connectDB();
})
