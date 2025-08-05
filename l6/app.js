
const fs=require("fs");


// fs.readFile("./input.txt","utf-8",(err,data)=>{ //Asynchronus non-blocking
//     if(err) throw err;
//     console.log(data);
// });


// const data=fs.readFileSync("./input.txt","utf-8");

// console.log(data);

//! Wrtie file
// fs.writeFile("input.txt","Hello world this is",(err)=>{
//     if(err) throw err;
// });

// fs.appendFile("input.txt","\n Hello node js",(err)=>{
//     if(err) throw err;
// })


//deleting file
// fs.unlink("input.txt",(err)=>{
//     if(err) throw err;
// })


//recomend

// const readStream=fs.createReadStream("input.txt","utf-8");

// readStream.on("data",(chunk)=>{
//     console.log(chunk);
// });
// readStream.on("end",()=>{
//     console.log("reading copleated");
// })

//Pipe

const readStream=fs.createReadStream("input.txt","utf-8");
const wrteStream=fs.createWriteStream("output.txt");
readStream.pipe(wrteStream);