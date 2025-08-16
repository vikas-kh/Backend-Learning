import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/database.js";
const app=express();
dotenv.config();
const PORT=process.env.PORT || 3000;

connectDB();
app.listen(PORT,()=>{
    console.log(`server listen at port ${PORT}`);
})