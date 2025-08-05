const http= require("http");
const server=http.createServer((req,res)=>{
    // console.log(req.url);
    // if(req.url==='/'){
    //     res.writeHead(200,{'Content-Type':'text/plain'})
    // res.end("Home");
    // }else if(req.url==="/api/user"){
    //     const obj={
    //         name:"Vikas",
    //         age:30,
    //         email:"vikkypermude@gmail.com"
    //     }
    //     res.writeHead(200,{'Content-Type':'application/json'});
    //     res.end(JSON.stringify(obj));
    // }

    // Handling POST method
    if(req.method === 'POST' && req.url === "/submit"){
        let body="";
        req.on('data',(chunk)=>{
            body=body+chunk.toString(); //convert Buffer to string
        })
        //end event triggerd when all data received
        req.on('end',()=>{
            console.log(body);
            console.log(JSON.parse(body));
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify({sucsess:true,message:"Account created successfully"}))
        })
    }else{
        console.log("hi");
         res.writeHead(404,{'Content-Type':'application/json'});
            res.end(JSON.stringify({sucsess:false,message:"Error"}))
    }
    
});

server.listen(8000,()=>{
    console.log("server listen ar port 80000")
})