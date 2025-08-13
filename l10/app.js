const express=require("express");
const bodyParser = require("body-parser");
/// first step to creat a web server

const app= express();
// app.get
// app.post
// app.put
// app.patch
// app.delete


app.get("/home",(req,res)=>{
    res.send("<h1>Home<h1>");
});

app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/profile",(req,res)=>{
    res.status(200).json({
        success:true,
        user:{
            username:"vikas123",
            email:"vikas@gmail"
        }
    })
})
app.listen(8000,()=>{
    console.log("server listem at port 8000");
})