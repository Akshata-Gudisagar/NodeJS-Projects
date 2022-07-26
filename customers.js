const http = require('http');

let customers = [
    {"code":100,"name":"xyz Electronics","phone":"9724560321","city":"Hubli"},
    {"code":101,"name":"abc Electronics","phone":"9235680321","city":"Dharwad"},
];

module.exports.getCustomers = (request, response)=>{
    response.writeHead(200,{"content-type":"application/json"});
    response.write(JSON.stringify(customers));
    response.end();
}


module.exports.getCustomers = (request, response, code)=>{
    response.writeHead(200,{"content-type":"application/json"});

    let customerResult = customers.find((customer)=>{
        return customer.code == code;
    });

response.write(JSON.stringify(customerResult));
response.end();
}


module.exports.addCustomer = (request,response,requestBody)=>{
    response.writeHead(200, {"Content-type":"application/json"});
    let inputData = JSON.parse(requestBody);
    console.log(inputData);
    if(inputData){
        customers.push(inputData);
    }
    response.end();
}