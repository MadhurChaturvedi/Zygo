import express from "express";
import dotenv from 'dotenv';
// dotenv 
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Auth Service is running on PORT:${PORT} 🐠`);
    console.log(`http://localhost:5000/`);
})
