const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for (let i = 0; i <6;  i++) {
        
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
//console.log(randomColor());
let stop;
const startChangingColor=function(){
    if(!stop){
        stop= setInterval(changeBackground,1000)
    }
function changeBackground(){
     document.body.style.background=randomColor();
}       
};


const stopChangingColor=function(){
    clearInterval(stop)
    stop=null;
}
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
//console.log(Math.floor((Math.random()*16)))