// console.log("Hello");

// function processOutput(){
//     console.log("How are you");
// }
// setTimeout(processOutput, 3000);

// console.log("Program continues execution..");
// syncronus callback
// console.log("App started..")
// let names = ["Akshata","Archana","Arpita"];

// let printArray = function(name){
//     console.log(name);
// }

// names.forEach(printArray);

// console.log("program continues execution...");

let persons=[
    {"name" : "Akshata","age":22,"city":"Hubli"},
    {"name":"Muktha","age":30,"city":"Gadag"}
]
let getPersons = function(){
    setTimeout(()=>{
persons.forEach((person)=>{
console.log(person.name+","+person.age+","+person.city);
});
    },2000);
}

let addPerson = function(person,callback){
    setTimeout(()=>{
        persons.push(person);
        callback()
    },1000);
}

addPerson({"name":"Deepali","age":23,"city":"kumta"},getPersons);

console.log("program continues....")