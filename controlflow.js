//if
if(true){

}
if(true)console.log(),console.log();//we use this type of if statement
//=== -for type checking
//scope -out of if its varible can not work if we use var then its work out side of if

//fals value-: false,zero,-0,BigInt 0n,"",null,undefiend,NaN
//true value-: "0",'false'," ",[],{},function(){}
 const emptyObj={

 }
if(Object.keys(emptyObj).length==0){//for object checking empty

}
//false==0-true,0==''-true
//Nulish Coalescing OPerator(??)=nul undefiende
let val1;
val=5??10
//val1=5??null-print not  null element
console.log(val1);//print 5-im some cases null occurs some prolem
//condition?true:false