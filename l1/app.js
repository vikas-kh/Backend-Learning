function greet(){
    console.log("greet");   
}
greet();
function logGreeting(fn){
    fn();
}
logGreeting(greet);

const f1 = function(){
    console.log("f1");
}

logGreeting(function(){
    console.log("f2");
})