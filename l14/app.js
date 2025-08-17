import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/database.js";
import userRouter from "./routes/user.js";
import todoRouter from "./routes/todo.js";
const app=express();
dotenv.config();
connectDB();



app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));

const PORT=process.env.PORT || 3000;
app.use("/api/v1/user",userRouter);
app.use("/api/v1/user",todoRouter);

app.listen(PORT,()=>{
    console.log(`server listen at port ${PORT}`);
})