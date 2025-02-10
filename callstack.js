//*****Execution context*****/
//global execution context-this-browser me this ki value window hoti hai
//global ec,function ec,eval-not important
//first phase- memory creation 
//phase2-execution phase

//1.global execution allocate to this
//2.memory phase take all variable and store undifiend,or in funcion-defination(all body part of function)
//3.execution phase-all varible asign value,or in functin-new environment+execution thread(in new environment first 2 step or repeat)//after new environment its deleted
//     

//single threaded -js
let val1=10
let val2=20
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)//for this new environment created
                             //memory phase                                 execution phase
                             //val1-undefiened                               //num-10
                             //val2-undefiened                                //num2-5
                             //total -undifiend-see above body of function    //15-after its return to global execution context
let result2=addNum(10,2)

//####call stack####
//global exe context in below stack ,one method come execute and out from stack
//if one is alrady in stack and two comes -lifo rule(last two arrive so that is out first)
