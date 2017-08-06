function List() {
this.listSize = 0;
this.pos = 0;
this.dataStore = []; // initializes an empty array to store list elements
this.clear = clear; // clear the list
this.find = find; //
this.toString = toString; // print out the list
this.insert = insert; // insert an element after anothee element
this.insertAt = insertAt // insert at a particular position
this.append = append; //  add to the end of a list
this.remove = remove;// remove an element
this.front = front;
this.end = end;
this.prev = prev;
this.next = next;
this.length = length; //
this.currPos = currPos;
this.moveTo = moveTo;
this.getElement = getElement;
this.length = length; //
this.contains = contains;
}
function append(element){
    this.dataStore[this.listSize++] = element;
}
function find(element){
    for(let i =0;i< this.dataStore.length; i++){
        if(this.dataStore[i] == element){
            return true
        }
        else{
            return false
        }
    }
}
function length(){
    return this.listSize
}
function toString(){
    return this.dataStore;
}


function remove(element){
    let foundAt = this.find(element);
    if(foundAt > -1){
        this.dataStore.spice(foundAt,1);
        --this.listSize;
        return 1
    }
    else{
        return -1
    }

}
function insert(element, after){
    let insertPos = this.find(after)
    if(insertPos > -1){
        this.dataStore.splice(insertPos+1,0,element)
        ++this.listSize
        return true
    }
    else{
        return false
    }
}
function insertAt(element,insertPos){
    if(insertPos > -1){
         this.dataStore.splice(insertPos,0,element)
        ++this.listSize
        return true
    }
    else{
        return false
    }
}
function clear(){
    delete this.dataStore;
    this.dataStore =[];
    this.listSize = this.pos =0
}
function contains(element){
    let containsPos= this.find(element);
    if(containsPos > -1){
        return true;
    }
    else{
        return false
    }
}
function front(){
    this.pos =0;
}
function end(){
    this.pos = this.listSize -1
}
function prev(){
    if(this.listSize > 0){
        --this.pos
    }
}
function next(){
    if(this.pos < this.listSize-1){
        ++this.pos
    }
}
function currPos(){
    return this.pos
}
function moveTo(pos){
    this.pos = pos
}
function getElement(){
    return this.dataStore[this.pos]
}


module.exports = List;