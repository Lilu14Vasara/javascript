// const arr=[1,2,3,4,5]
// for (const i of arr) {
//   //  console.log(i);
// }
// const gretting="Hello World!"
// for (const Greet of gretting) {
//     //console.log(`each char is ${Greet}`);
// }
// //Maps-(object) hold key value all value are unique
// const map=new Map()
// map.set('IN',"india")
// map.set('USA',"United State Of India")
// //console.log(map); -all value of map
// for (const key of map) {//for (const [key,value] of object) {}//print key or value
//   //  console.log(key);//full array print
// }

// // const myobj={
// //     'game1':'nfs',
// //     'game2':'spiderman'
// // }
// // for (const [key ,value] of myobj) {//myobj not iterabel only work in map
// //     //console.log(key ,' :-' ,value);
// // }

// //for in loop for object iterable-object
// const myobj={
//     js:"javascript",
//     oop:"object oriented programming"
// }
// for (const key in myobj) {
//     //console.log(key);//for key
//    // console.log(myobj[key]); //for key and value
//   // console.log(`for printing both ${key} and ${myobj[key]}`);
// }

// //for in loop for array
// const pro=["js","java","c++","py"]
// for (const key in pro) {
//     console.log(pro[key]);//printing value
//    //console.log(key);//in for in loop we can get only key but in for of loop w can get direct value
// }
// //#### map is not iteratable so we can not use for in loop in map


//******for each loop*****/
const coding=["my","run","oop","py"]
coding.forEach(function(item) { //not use function name
    //console.log(item);
    
});
//using arraow function
// coding.forEach((item)=>{
//  console.log(item);//console.loog(item,index,arr)
// })
// also use array in oject in for each loop
const myactivity=[
    {
        first:"running",
        second:"breakfast"
    },
    {
     first:"statr",
     studying:"js"
    },
    {
    first:"js",
    star:"programing"
    }
]
myactivity.forEach((item)=>{
    console.log(item.first);
})