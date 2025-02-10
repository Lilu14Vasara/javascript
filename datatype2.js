//primitive
//7 type: string,number,boolean,null,undefind,symbol-for uniquness,bigint

//refremce type(non primitive):array,objects,function

const score=100
const isloggedin=true
const outsideTemp=null 
let userEmail;//undefiend

const id=Symbol('123')//symbol unique id gives 
const bignumber=789654300n

//const heros={"krishna","shivam"}
let myobj={
    name:"ram",
    age:22
}
//objects
const myfunction=function () {
    console.log("hello word");
}
console.log(typeof myfunction);

//stack-primitive data type   heap->non primtive

//stack create copy addresh but in heap its not creted copy its direcly allocate heap memory refrence
//stack value not change only crete copy of its but in heap not ,heap not change refrence