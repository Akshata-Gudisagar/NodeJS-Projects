// const express = require('express');

// const app = express();

// const filePath = "./files/images.jpg";

// app.use("/images",(req,res)=>{
//     fs.readFile("./files/images.jpg",(err,content)=>{
//         if (err) {
//             res.writeHead(404);
//             res.end("No such file Found");

//         }
//         else{
//             res.writeHead(200,{"content-type": "image/jpg"});
//             res.end(content);

//         }

//     });

// })

// app.use("/pdf",(req,res)=>{
//     fs.readFile("./files/images.jpg",(err,content)=>{
//         if(err) {
//             res.writeHead(404);
//             res.end("No such files found");
//         }
//         else{
//             res.writeHead(200,{"content-type": "image.jpg"});
//             res.end(content);

//         }
//     });
// })
// app.listen(3000,()=>{
//     console.log('Listening on port 3000.');

// })

const express = require('express')
const res = require('express/lib/response')


//creating the server

// const joi = require('joi')

// let app = express()// create server

// const schema = require('./schemas/app_schema');
// const {customerSchema} = require('./schemas/app_schema')

// const customers = require('./services/customer.js')

// app.use(express.json()) //middleware

// app.get('/customers', (req, res) => {
//     const customer = customers.getCustomers();
//     res.send(customer)
// })

// app.get('/customers/:code', (request, response) => {
//     // console.log(request.params)
//     // console.log(request.query)
//     const customer = customers.getCustomer(request.params.code)
//     response.send(customer)
//     // if(!customer){
//     //     response.status(404).send("customer code not Found")

//     // }
// })

// app.post('/customers', (request, response) => {
//     // console.log(request.body)
//     const validationResult = schema.customerSchema.validate(request.body)


//     if (validationResult.error) {
//         response.status(500).send("Invalide customer");
//         return;
//     }



//     const customer = customers.addCustomer(request.body)


//     response.send(customer)


//     //    if(!customer){
//     //        response.status(404).send("Customer code not found")
//     //    }
// })

// app.delete('/customers/:code',(requset,response)=>{
//     if(requset.params.code){
//         let deleteCustomer = customers.deleteCustomer(requset.params.code)
//         if(deleteCustomer)
//         response.status(200).send(deleteCustomer)
//         else
//            response.status(400).send(" deleted")

//     }
//     else{
//      response.status(400).send("Invalide Customer code")
//     }

// })


// app.listen(8000, () => {
//     console.log("Application Started......")
// })


// const schema = joi.object({
//     code: joi.number().integer(),
//     name: joi.string().required(),
//     city: joi.string().required()
// })
// validateCustomerObj = (customer) => {
//     const validationResult = joi.validate(customer, schema)

// }

// module.exports = {
//     customerSchema:schema
// }


//sending the image in the server

const fs = require('fs')

const app = express()

const filepath = './3.jpg'


app.use('/image', (req, response) => {
    fs.readFile(filepath, (err, content) => {
        if (err) {
            response.writeHead(404)
            response.end("No such a file")
        }
        else {
            response.writeHead(200, { "Content-type": "image/jpg" })
            response.end(content)
        }
    })
})

app.use('/text', (req, res) => {
    fs.readFile('./files/file.txt', (err, content) => {
        if (err) {
            res.writeHead(404)
            res.end("No such a file")
        }
        else {
            res.writeHead(200, { "Content-type": "text" })
            res.end(content)
        }

    })
})
app.listen(8080, () => {
    console.log("Applicatin Started.......")
})