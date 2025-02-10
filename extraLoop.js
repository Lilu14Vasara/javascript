// // const coding=["my","run","oop","py"]
// // const values=coding.forEach((item)=> {
// //     console.log(item);
// //     return item
// // })
// // console.log(values);//not return anything if we write or not write 

// const  mynum=[1,2,3,4,5,6,7,8,9,10]
// //const revalue=mynum.filter((num)=> num>4)//return value using filter
// //console.log(revalue);
// //if we use direct arrow function
// // mynum.filter((num)=>{//{-we use it then retuen keyword is compolsary
// //  return num>4//direct not print value use return ke word to print value
// // })
// const newnum=[]

// // mynum.forEach((num)=>{//using for each loop condition
// //     if (num>4) {
// //         newnum.push(num)
// //     }
// // })
// // console.log(newnum);

// //##########use of filter###########
// //one array in multiple objects and object in year of publicaion,edition,genre,title details included
// //if user want desire output below method we can use
// const bookuser=book.filter((bk)=>bk.genre=='history')//find all outof gnre =history
// console.log(bookuser);//all data of book genre =history

// const mynumbers=[1,2,3,4,5,6,7,8,9,10]
// //const newnumbers=mynumbers.map((num)=>num+10)
// mynumbers.map((num)=>num*10)
// .map((num)=>num+1)//take above map value
// .filter((num)=>num>=40)//we can use multiple method using chain
// console.log(newnumbers);

//##########use reduce method########
const mynum=[1,2,3]
// const mytotal=mynum.reduce(function(acc,current){
//     console.log(`acc: ${acc} and current:${current}`);
//     return acc+current
// },0)
const mytotal=mynum.reduce((acc,current)=>acc=current,0)

console.log(mytotal);