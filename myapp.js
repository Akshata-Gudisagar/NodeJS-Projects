const http = require('http');
const customers = require('./customers');
const portno = 2000;
const httpServer = http.createServer((request, response)=>{

switch(request.method){
    case "GET":
    if(request.url=="/customers"){
response.writeHead(200)
// customers.getcustomer(request,response);
customers.getCustomers(request,response);
// response.write(JSON.stringify({code:100,name:"ABC Electrinics",city:"hubli",phone:"4659865435"}));
// response.end();
    }
    break;
    case "POST":
if(request.url=="/customers"){
let data = "";
request.on("data",(dataPart)=>{
    data= data + dataPart;
});
request.on("end", ()=>{
    customers.addCustomer(request,response,data);
});
   
}
break;
    case "DELETE":
        break;
    case "PUT":
        break;
}
});

httpServer.listen(2000,(error)=>{
    if(error)
       console.log("Error connecting to server");
       console.log("Listening to incoming request");
})