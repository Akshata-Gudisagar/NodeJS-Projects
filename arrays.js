// const { ModuleDetectionKind } = require("typescript");

let arrElements = [];
const ARRAY_SIZE = 5;

function addElement(element) {
    if(arrElements.length<ARRAY_SIZE){
        arrElements.push(element);
        return true;
    }
    else
    return false;
}
module.exports.addFirstElement=function(element) {
    if(arrElements.length<ARRAY_SIZE){
        alertElement.unshift(element);
        return true;
    }
    else
    return false;
}
module.exports.getElements=function(){
    return arrElements;
}
function removeElements(){
    arrElements.pop(element)
    return true;
}
function removeFirstElements(){
    arrElements.shift(element)
    return true;
}
function filterArray(Category){
    arrElements.filter((element)=>{
        return (element.Category==Category)
        
    })
}
function search(){
    
}
module.exports.addElement = addElement;
module.exports.removeElements=removeElements;
module.exports.filterArray=filterArray;
// module.exports.display = getElements;
// module.exports.addFirstElement=addFirstElement;
    
