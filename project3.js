const clock=document.getElementById('clock')
//document.queryselector('#clock')
//let date=new Date()
//console.log(date.toLocaleString());//in consle show updated time
setInterval(function(){
    let date=new Date()
    //console.log(date.toLocaleString());//in consle show updated time
  clock.innerHTML=date.toLocaleTimeString();
},1000)//specific time after updated-update ever time 


