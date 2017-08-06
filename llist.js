function Node(element){
    this.element = element;
    this.next = null;
}

function LList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.insertAfter = insertAfter;
    this.find = find;
    this.remove = remove;
    this.findPreviousNode = findPreviousNode;
    this.display = display;
    this.insertLast = insertLast;
    // this.printNext = printNext
}

function find(element){
    let currNode = this.head;
    while (currNode.element != element){
        currNode = currNode.next
    }
    return currNode
}
function insert(element){
    let currNode = this.head;
    let newNode = new Node(element);
    newNode.next = currNode.next;
    currNode.next = newNode;

}

function insertAfter(newElement , item){
    let newNode = new Node(newElement);
    let curr = this.find(item);
    newNode.next = curr.next;
    curr.next = newNode
}

function insertLast(element){
    let newNode = new Node(element)
    let currNode = this.head;
    while(currNode.next != null){
        currNode = currNode.next
    }
    newNode.next = null;
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
    let prevNode = this.findPreviousNode(element);
    if(!(prevNode.next == null)){
    prevNode.next = prevNode.next.next
    }
}
function display(){
    let currNode = this.head;
    while(currNode.next !== null){
        console.log(currNode.next.element);
        currNode = currNode.next
    }
}

let cities = new LList();
cities.insert("lagos");
cities.insert("ife");
cities.insertAfter("ibadan","lagos")
cities.insert("kano");
console.log("------------")
console.log("------------")
cities.display()
cities.remove("ife")
console.log("------------")
cities.display()
cities.insert("jig");
cities.remove("kano")
console.log("------------")
cities.display()
cities.insertLast("test")
console.log("------------")
cities.display()