//singleton -constructor i used
//object litrals
//Object.create//constuctor

//for symbol 
const mySym=Symbol("key1")
 const jsuser={
    name:"lilu",
    "fullValue":"vasara",//this name not printing through the .  only accese [jsuser."fullname"]
    age:18,
   [ mySym]:"mykey1",
    email:"abc@gmail.com"
 }
//  myaArray=["h","i"]
//  console.log(myaArray[1])array


// console.log(jsuser.email);//for printing
// console.log(jsuser["email"]);//type of jsuser.mysym is string for symbol[]
// console.log(jsuser[mySym]);
// jsuser.email="lilu@gmail.com"
// Object.freeze(jsuser)//after this no value change
// jsuser.email="bharat@123"
// console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting());