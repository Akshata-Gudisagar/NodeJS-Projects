let myPromise = function(){

    return new Promise((resolve,reject)=>{

        let status = true;
        //long pending operation.
        //----------------------
        setTimeout(()=>{},1000);
        if(!status){
            resolve("Success");
        }
        else{
            reject("Error!");
        }
    })
}
let promised = myPromise();
let promisedResult=promised.then((promisedOutput)=>{
    console.log(promisedOutput);
})
.catch((error)=>{
    console.log(error);
});

console.log("continue execution...")