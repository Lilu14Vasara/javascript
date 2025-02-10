(function chai(){
    console.log("hii my name is..");
}());//we can call function imediate using() for execution,global polution ko htane ke liye ham iife ka use krte hai
//use last in semicolon for next execution
((name)=>{
  console.log(`db connected two  ${name}`);
})('hitesh') ; //we use semicolon for ending loop because compiler dont know where to stop
//for giving argument ife