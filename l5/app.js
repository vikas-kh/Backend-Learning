// const Emitter=require("./emitter");  //this is my module
const Emitter=require("events"); // this node.js core module
const  events=require("./config").events;

const emiter =new Emitter();

console.log(emiter);
//this is bad practice
emiter.on(events.GREET, function(){
    console.log("hello");
});

emiter.on(events.GREET, function(){
    console.log("greet occured!");
});
emiter.on(events.FILEOPEN, function(){
    console.log("File opend Sucsessfully");
});

emiter.emit("greet");
emiter.emit("age");
emiter.emit(events.FILEOPEN);
