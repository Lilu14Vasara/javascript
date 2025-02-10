// let a=35;//global scope
// if(true){//local scope
//     let a=10
//     const b=20
//     var  c=30
//}
// console.log(a);//inside block a,b outside not print but a is variable type so thats print outside of any block
// console.log(b);
// console.log(c);
//######### function inside function#######
function one(){
    const username="ram"

    function two(){
        const price=100

        console.log(username)//we can acesse parent variable
    }
    //console.log(price)//cant print child function items
    two()//if we comment two then its not execute one
}
one()

//if we assign function to variable or constant then before function we can not cal functin,but we not initialize the const then we can call function before implementation