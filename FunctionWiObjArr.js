// function calculateArea(...num1){//using only num we can ge 200 but use ... we get all value of entered
//     return num1
// }
//console.log(calculateArea(200,400,600,2000));//rest operator,before num1 we write val1 val2 then it`s print 600,2000

const user={
    username:"ram",
    price:100
}
function handleObject(anyobject){
    console.log(`user name is  $(anyobject.username) and price is $(anyobject.price)`);
}
handleObject(user)
