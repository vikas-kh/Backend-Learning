import express from "express";

const app=express();

app.use(function(req,res,next){
    console.log("middleware is called");
    next();
})

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(8000,()=>{
    console.log("server listen ar post 8000");
})