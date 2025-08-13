import express from "express";
import dotevn from "dotenv";
import bodyParser from "body-parser";
dotevn.config();
const app=express();
const PORT = process.env.PORT || 3000


//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/v1/user/login",(req,res)=>{
    const {email,password}=req.body;
    console.log(obj);

    //save to the databse

    res.status(200).json({
        success:true,
        message:"LOg in successfully"
    });
})

app.listen(PORT,()=>{
    console.log(`server listen at port ${PORT}`);
});