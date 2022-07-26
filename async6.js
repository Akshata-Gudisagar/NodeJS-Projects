let planTour = function(){
    let weather = true;
    return new Promise((resolve,reject)=>{

        let tourDetails = {
            "location": "Bengaluru",
            "Price": 50000.0,
            "mode":"taxi"
        
        }
        if(weather){
            resolve(tourDetails);
        }
        else
        reject("Error.Bad weather");
    });
}
let bookTaxi = function(tourDetails){
    let taxiStatus = true;
    if(taxiStatus){
        return Promise.resolve("Taxi booked ->"+ JSON.stringify(tourDetails));
    }
    else
    return Promise.reject("No Taxi available");
}

async function tourOperation(){
    let tourDetails = await planTour();
    let finalOutput = await bookTaxi(tourDetails);
    console.log(finalOutput);
}

tourOperation();