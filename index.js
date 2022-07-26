const callMe = async()=>{
    if(true){
        return "Hello World"
    }
}

const parent = async()=>{
    return await callMe()
}
(async ()=>{
    console.log((await parent()))
})();