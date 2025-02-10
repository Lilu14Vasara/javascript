//const tinderUser=new Object()
// const tinderUse={}
// //console.log(tinderUser);
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isloggedin=false
//console.log(tinderUser);

// const regularuser={//object inside objects
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"bharat",
//             lastname:"vasara"
//         }
//     }
// }
// console.log(regularuser.fullname);
const obj1={1:"a",2:"b"}
const obj2={1:"a",4:"b"}
//const obj3={obj1,obj2}//not combine both
//  const obj3=Object.assign(obj1,obj2)//connot repeat value  {},obj1,obj2,obj4  if i dont put empty then all value goes to in obj
// console.log(obj3);
// console.log(obj1==obj3)//return true  bacause all value store in obj1
//const obj3={...obj1,...obj2}//very highly useful syntax
// console.log(obj3);

// const users=[
//     {
//         id:1,
//         email:"vasra@gmail.com"
//     }
// ]
// users[1].email//for printing object inside array
console.log(tinderUser);
console.log(Object.keys(tinderUser))//return key value
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//both value and key or aray inside array
console.log(tinderUser.hasOwnProperty((`isloggedin`)));//for checling value of object