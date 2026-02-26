let score=0;
 let size = 2;
 let timer =50;
 let isPaused = false;
 let height=90;
 let weight=90;

  let container = document.getElementById('game');

// let resumeBtn = document.getElementById('resume-btn')
// resumeBtn.hidden=true;

 const myInterval = setInterval(function myTimer() {
   timer--
  document.getElementById("timer").innerHTML =timer;


   if(timer == 0){
    alert("Game is over");
    alert(`Your Score is ${score}` )
    document.getElementById('score').innerHTML=''
    
    
    clearInterval(myInterval)
    timer=50;
    score=0
   }
}, 1000);


function sizeIncrease(){
                    size++ ;
                    score++;
                    
                   document.getElementById('score').innerHTML= score;
                    createTable()
                   
                 }

function pauseTimer() {
    isPaused = true;
    clearInterval(myInterval);
    let pauseBtn = document.getElementById('pause-btn')
    //  container.hidden = true;

    pauseBtn.disabled = true; 
    
}
// function resumetimer(){
//     table.hidden = false;
//     const myInterval = setInterval(function myTimer() {
//    timer--
//   document.getElementById("timer").innerHTML =timer;


//    if(timer == 0){
//     alert("Game is over");
//     alert(`Your Score is ${score}` )
//     document.getElementById('score').innerHTML=''
    
    
//     clearInterval(myInterval)
//     timer=50;
//     score=0
//    }
// }, 1000);


// }


function createTable() {
    


const randomColor=["blue","purple","green","pink","gray","yellow","orange"];
let colorRandom=Math.floor(Math.random()*randomColor.length);
 let choosenRandomColor=randomColor[colorRandom]
 

 let rowRandom=Math.floor(Math.random()*size)
 let colRandom=Math.floor(Math.random()*size)

   
    container.innerHTML = "";
    table = document.createElement('table');
  
    
    table.style.border="2px solid white"
    table.style.alignItems="center";
    table.style.backgroundColor="white"
    
    table.style.borderBlockColor="white"
  
    

    for (let i = 0; i < size; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            let td = document.createElement('td');
            td.style.backgroundColor=choosenRandomColor;

            if (i == rowRandom && j == colRandom) {
                 td.style.opacity="0.28"//
               td.addEventListener('click',sizeIncrease)
            }
            td.style.borderRadius="10px"
            td.style.border="1px solid black"

            // td.style.width = "90px";
            // td.style.height = "90px";
        
         if ( isPaused == true) {
           td.removeEventListener('click',sizeIncrease)
        //    table.hidden = true;
        //    resumeBtn.hidden=false;
          }
            
            td.textContent = " ";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);


}
createTable()



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
    <style>

 #game {
  display: flex;
  justify-content: center; /* Centers content horizontally */
  align-items: center;     /* Centers content vertically */
  height: 100vh;           /* Sets the container height to the full viewport height */
  }
  table{
    height: 60vmin;
    width:60vmin;
    table-layout: fixed;
  }
  .bodyClass{
    background-color: rgb(245, 155, 155);
  }
   
  h1{
  display: flex;
  justify-content: center; 
   
  }
#time{
    text-align: center;
    background-color: rgb(221, 223, 238);
    padding: 10px;
    border-radius: 10px;
}
 #timer{
     text-align: end;
     color: white;
     
}
#scoreShow{
    text-align: left;
    font-size: 16px;
    color: bisque;
    
}
#pause-btn{
    background-color: rgb(243, 161, 7);
  border: none;
  color: white; 
  padding: 10px 12px; 
  text-align: center; 
  text-decoration: none; 
  font-size: 16px; 
  cursor: pointer; 
 
}
/* #resume-btn{
      background-color: rgb(243, 161, 7);
  border: none;
  color: white; 
  padding: 10px 12px; 
  text-align: center; 
  text-decoration: none; 
  font-size: 16px; 
  cursor: pointer; 

} */

#items{
display: flex;
justify-content:space-between;

}


</style>
</head>
<body class="bodyClass">
    <h1>Table Game</h1>
    <div id="items">

    
    <h3 id="scoreShow"> Score : <span id="score"> </span></h3>

    <h3 id="time">  <span id="timer"></span></h3>
    <button type="button" id="pause-btn" onclick=pauseTimer()>PAUSE</button>
    <!-- <button id="resume-btn" onclick=resumetimer() >Resume</button> -->
    
    </div>

    <div id="game"></div>

      <script src="game.js"></script>
    
</body>
</html>








