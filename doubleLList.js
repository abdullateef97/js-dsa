function Node(element){
    this.element = element;
    this.next = null;
    this.prev = null;
}
``
function DoublyLList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.insertAfter = insertAfter;
    this.find = find;
    this.remove = remove;
    this.findPreviousNode = findPreviousNode;
    this.display = display;
    this.dispRev = dispRev
    this.insertLast = insertLast;
    this.findLast = findLast;
    // this.printNext = printNext
}

function find(element){
    let currNode = this.head;
    while (currNode.element != element){
        currNode = currNode.next
    }
    return currNode
}
function findLast(){
       let currNode = this.head;
    while(currNode.next != null){
        currNode = currNode.next
    }
    return currNode
}
function insert(element){
    let currNode = this.head;
    let newNode = new Node(element);
    newNode.next = currNode.next;
    newNode.prev = currNode;
    currNode.next = newNode;

}

function insertAfter(newElement , item){
    let newNode = new Node(newElement);
    let curr = this.find(item);
    newNode.next = curr.next;
    newNode.prev = curr;
    curr.next = newNode
}

function insertLast(element){
    let newNode = new Node(element)
    let currNode = this.findLast()
    newNode.next = null;
    newNode.prev = currNode;
    currNode.next = newNode
    
}

function findPreviousNode(element){
    let currNode = this.head;
    while(!(currNode.next == null)&&(currNode.next.element != element)){
        currNode = currNode.next
    }
    return currNode;
}
//n.b -- you cant remove the head node
function remove(element){
    let currNode = this.find(element);
    if(!(currNode.next == null)){
        currNode.prev.next = currNode.next
        currNode.next.prev= currNode.prev;
        currNode.next = null;
        currNode.prev = null;
    }
}
function display(){
    let currNode = this.head;
    while(currNode.next !== null){
        console.log(currNode.next.element);
        currNode = currNode.next
    }
}
function dispRev(){
    let currNode = this.head;
     currNode = this.findLast();
    while(!(currNode.prev == null)){
        console.log(currNode.element);
        currNode = currNode.prev;
    }
}

let cities = new DoublyLList();
cities.insert("lagos");
cities.insert("ife");
cities.insertAfter("ibadan","lagos")
cities.insert("kano");
console.log("------------")
console.log("------------")
cities.display()
console.log();
cities.dispRev();
cities.remove("ife")
console.log("------------")
cities.display()
console.log();
cities.dispRev();
cities.insert("jig");
cities.remove("kano")
console.log("------------")
cities.display()
console.log();
cities.dispRev();
cities.insertLast("test")
console.log("------------")
cities.display()
console.log();
cities.dispRev();