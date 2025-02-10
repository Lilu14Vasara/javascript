const myArr=["thor","ironman","spiderman"]
const dc=["superman","flash","god"]

//myArr.push(dc)
// console.log(myArr)//array under array
// console.log(myArr[3][1])


// const allHeros=myArr.concat(dc)
// console.log(allHeros);//creating new array and concat can join two array

// const allheros=[...myArr,...dc]//spliting all value like glass
// console.log(allheros);
// const differentArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_array=differentArray.flat(Infinity)//all value are seprated
// console.log(real_array);

console.log(Array.isArray("Rakesh"))//false because it's string
console.log(Array.from("Rakesh"))//devide string into character array
console.log(Array.from({name:"hitesh"}))//it's dont know print value or key so its give empty array

let sc=100
let sc2=200
let sc3=300
console.log(Array.of(sc,sc2,sc3));//convert all value in array