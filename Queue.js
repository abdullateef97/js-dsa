// queue is a fifo

function Queue(){
this.dataStore = [];
this.enqueue = enqueue;
this.dequeue = dequeue;
this.front = front;
this.back = back;
this.toString = toString;
this.empty = empty;
this.clear = clear;
this.length = length
}
function enqueue(element){
    this.dataStore.push(element)
}
function dequeue(){
    return this.dataStore.shift()
}
function front(){
    return this.dataStore[0]
}
function back(){
    return this.dataStore[this.dataStore.lenght -1]
}
function toString(){
    return this.dataStore
}
function empty(){
    let lenght = this.dataStore.length
    if(lenght == 0){
        return true
    }else return false
}
function clear(){
    delete this.dataStore;
    this.dataStore = []
}
function lenght(){
    return this.dataStore.length
}
module.exports = Queue;