// const http = require('http');
// const https = require('https');



// const httpOptions = {
// hostname : 'jsonplaceholder.typicode.com',
// path : '/users/1',
// method : 'GET'

// }
// http.request(httpOptions , (response)=>{
    
//     let data = " ";
//     response.on("data",(resPart)=>{

//     })
     
//     response.on("end", ()=>{
//         console.log(data);
//         data = JSON.parse(data);
//         console.log(data.name + " ," + data.email);
//     })
// }).end();

const data = JSON.stringify({
    name: 'John Doe',
    job: 'Developer'
});

const options3 = {
    hostname: 'reqres.in',
    path: '/api/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }

};

const req = https.request(options3,(res)=>{
    let data = '';

    // console.log('Status Code:',res.statusCode);

    res.on('data', (chunk)=>{
        data += chunk;
    });

    res.on('end', ()=>{
        console.log('Body:',JSON.parse(data));
    });
}).on("error", (err) =>{
    console.log("Error:", err.message);
});

req.write(data);
req.end();