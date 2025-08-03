//events -> 

function Emitter(){
    this.events={}
}
Emitter.prototype.on= function(type,cb){
    this.events[type] = this.events[type] ||[];
    this.events[type].push(cb);
}