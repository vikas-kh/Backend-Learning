
const http=require("http");

const server= http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plane'});
    res.end("Hello I am comming from web server")
});

server.listen(8000,()=>{
    console.log('server listen at port 8000');
});