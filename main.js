// console.log("Welocome");

// function Welocome(name){
//     console.log("hello " + name + ".")
// }
// Welocome("Akshata");

const arrays = require('./arrays.js')

console.log(module.exports);

// console.log(arrays.addElement("Pen"));
// console.log(arrays.addElement("Pencil"));
// console.log(arrays.addElement("Pen"));
// console.log(arrays.addElement("Pen"));

// let outputArray = arrays.getElements();

// outputArray.forEach((element,index)=>{
//     console.log(element);
// });

// for(let i=0;i<outputArray.length;i++){
// console.log(outputArray[i]);
// }

arrays.addElement({"ProductName":"Pen","Price":20,"Category":"Stationary"});
arrays.addElement({"ProductName":"Pencil","Price":20,"Category":"Stationary"});
arrays.addElement({"ProductName":"Book","Price":20,"Category":"Stationary"});
arrays.addElement({"ProductName":"Pen","Price":20,"Category":"Stationary"});
arrays.addElement({"ProductName":"Pen","Price":20,"Category":"Stationary"});

let filteredArray=arrays.filterArray("electronics");

filteredArray.forEach((element)=>{
    console.log(element);
})