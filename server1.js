const http = require('http');

const portno = 2000;
const httpServer = http.createServer((request, response)=>{
// console.log(request.method);
// console.log(request.url);
switch(request.method){
    case "GET":
    if(request.url=="/customers"){
// contact database from here and fetch the customer records
// elastic search
response.writeHead(200)
response.write(JSON.stringify({code:100,name:"ABC Electrinics",city:"hubli",phone:"4659865435"}));
response.end();
    }
    case "POST":

    case "DELETE":
    case "PUT":


}
});

httpServer.listen(2000,(error)=>{
    if(error)
       console.log("Error connecting to server");
       console.log("Listening to incoming request");
})