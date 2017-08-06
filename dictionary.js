function dictionary(){
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.retAll = retAll;
    this.count = count;
    this.clear = clear;
    this.getValue = getValue;
    this.changeValue = changeValue
}

function add(key, value){
    this.datastore[key] = value
}
function getValue(key){
    return this.datastore[key]
}
function find(key){
    if(this.datastore[key]){
        return 1
    }
    else{
        return -1
    }
}
function changeValue(key, newValue){
        this.datastore[key] = newValue
   
}


function remove(key){
    delete this.datastore[key]
}

function showAll(){
    for(let key of Object.keys(this.datastore)){
        console.log(key +" -->> " + this.datastore[key])
    }
   // console.log(this.datastore)
}
function retAll(){
    return this.datastore;
}

function count(){
    let count = 0;
    for(let key in Object.keys(this.datastore)){
        ++count
    }
    return count;
}

function clear(){
    for(let key in Object.keys(this.datastore)){
        delete  this.datastore[key];
    }
}


 module.exports = dictionary
let str = "the brown fox jumped over the blue fox"
let strArr = str.split(" ");
// let dicto = new dictionary();
// for (let key in strArr){
//     if(!(key in Object.keys(dict))){
//         dict.add(key,1);
//     }
//     else{
//         let count = dict.find(key);
//         count++
//         dict[key] = count
//     }
// }
 let dict = new dictionary()
 dict.add("boy",2)
 dict.showAll();
