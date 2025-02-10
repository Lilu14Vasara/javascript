const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);print is writablle or not emmurable

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));//it show name and show its writable or not

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,//if its false then we cant use any loop in this 
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}