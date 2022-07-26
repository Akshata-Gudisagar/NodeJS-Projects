const express = require('express');
const Joi=require('joi');
const customers= require('../expressservices/customers.js');

const app= express();
app.use(express.json());

app.get("/customers",(request,response)=>{
    let cust=customers.getCustomers();
    response.send(cust).send("success");
});


app.get("/customers/:code",(request,response)=>{
    console.log(request.params);
    console.log(rrequest.query);
    // console.getCustomer()
});
app.post("/customers",(request,response)=>{
    console.log(request.body);
    const validationResult=validateCustomerObj(request.body);
   if(validationResult.error){

   }
    let cust=customers.addCustomer(request.body);
    response.send(cust);
});
app.listen(3000,()=>{
    console.log("App is listening");  //npm install nodemon -g
});
const customerSchema= Joi.object.keys({
   code:Joi.number().integer().required(),
   name:Joi.string().required() ,
   city:Joi.string.required()
} )
validateCustomerObj=(customer)=>{
  const validationResult =  customerSchema.validate(customer);
}