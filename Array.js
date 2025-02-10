const myarr=[0,1,2,3,4,5,true,"hitesh"]//array isobject,javascript array is resizeble,
// console.log(myarr[0]);//shallow copy -change in array array is change like heap memory
// const myheros=["shaktiman","kanha","ram","mohan"]
// myarr.push(5)
// console.log(myarr);
// myarr.pop();
// console.log(myarr)
// myarr.unshift(0);
// myarr.shift()///unshift add element in first so that all value can changed
// console.log(myarr);
// console.log(myarr.includes(5));//check 5 is presentor not in this
// console.log(myarr.IndexOf(7));
// const newarr=myarr.join()
// console.log(myarr);//array format
// console.log(newarr);//covert into a string
// console.log(typeof newarr);//string

//slice splice

console.log("A",myarr)
const myn1=myarr.slice(1,3)//print first and second value
console.log(myn1);//only print 1,2 value last value is not prinitng
console.log("B",myarr);

const myn2=myarr.splice(1,3)//after splice arr in cut 1-3 elements,splice also print last elemets
console.log(myn2);//print 1,2,3 valu
console.log("B",myarr);