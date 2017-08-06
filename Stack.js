//Stack is a lifo data structure -:last in first out

function Stack(){
this.dataStore = [];
this.top =0;
this.pop = pop; //remove an element from the top of the list
this.peek = peek; //check which element is at the top of the list
this.push = push; // add an element to the list
this.length = length
this.clear = clear
this.toString = toString;
}

function push(element){
    this.dataStore[this.top++] = element
}
function pop(){
    return this.dataStore[--this.top]
}
function peek(){
    return this.dataStore[this.top -1]
}
function length(){
    return this.top
}

function clear(){
    this.top = 0
}
function toString(){
    return this.dataStore
}



module.exports = Stack;