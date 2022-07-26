
console.log("Program starts....");

let persons=[
    {"name":"Diwakar","age":23,"city":"andra"},
    {"name":"Chandan","age":23,"city":"hasan"},

]

let getPersons = function(){
    setTimeout(()=>{
        persons.forEach((person)=>{
            console.log(person.name+","+person.age+","+person.city);
        });
    },2000);
}

let addPerson = function(person){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            persons.push("Add person completed");
            resolve();
        },1000);
    });
}

async function func(){
let promisedResult = await addPerson({"name":"Akshata","age":22,"city":"hubli"})
console.log(promisedResult);
getPersons();
}

func();