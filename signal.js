<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table</title>
    <style>
        table{
            height: 500px;
            width: 500px;
            margin: auto;
            margin-top: 250px;
            border-collapse: collapse;
            
        }
      
        #squre{
            color: white;
            border: none;
            border-right: none;
            border-left: none;
            border-top: none;
            border-bottom: none;

        }
        
        #northG,#westG,#eastG,#southG{
            background-color: rgb(18, 231, 18);
            opacity: 0.4;
            
            
        }
        #northR,#westR,#eastR,#southR{
            background-color: rgb(206, 7, 7);
            opacity: 0.4;
            
        }
        #northY,#westY,#eastY,#southY{
            background-color: rgb(218, 233, 9);
            opacity: 0.4;
           
        }
        .color{
            background-color: rgb(59, 55, 55);
        }
        
    </style>
</head>
<body>
    
    <table >
        <tr>
            <td rowspan="2" colspan="2" id="squre"></td>
            <td colspan="3" class="color">N</td>
            <td colspan="2" rowspan="2" id="squre"></td>
        </tr>
        <tr>
            <td id="northG">G</td>
            <td id="northR">R</td>
            <td id="northY">Y</td>
        </tr>
        <tr>
            <td rowspan="3" class="color">W</td>
            <td id="westG">G</td>
            <td rowspan="3" colspan="3" ></td>
            <td id="eastG">G</td>
            <td rowspan="3" class="color">E</td>
        </tr>
        <tr>
            <td id="westR">R</td>
            <td id="eastR">R</td>
        </tr>
        <tr>
            <td id="westY">Y</td>
            <td id="eastY">Y</td>
        </tr>
        <tr>
            <td rowspan="2" colspan="2" id="squre"></td>
            <td id="southG">G</td>
            <td id="southR">R</td>
            <td id="southY">Y</td>
            <td rowspan="2" colspan="2" id="squre"></td>
        </tr>
        <tr>
            <td colspan="3" class="color">S</td>
        </tr>
    </table>
    <script src="table.js"></script>
</body>
</html>



let nG=document.getElementById('northG');
let nR=document.getElementById('northR');
let nY= document.getElementById('northY');
let wG=document.getElementById('westG');
let wR=document.getElementById('westR');
let wY=document.getElementById('westY');
let eG=document.getElementById('eastG');
let eR=document.getElementById('eastR');
let eY=document.getElementById('eastY');
let sG= document.getElementById('southG');
let sR= document.getElementById('southR');
let sY=document.getElementById('southY');

let colorR=[nR,wR,sR,eR];
let colorG=[nG,wG,sG,eG];
let colorY=[nY,wY,sY,eY];

const colors=[ nG,nR,nY,wG,wR,wY,eG,eR,eY,sG,sR,sY]
function dimAll() {
    for (let i = 0; i < colors.length; i++) {
        colors[i].style.opacity='0.4';
        
    }
}
let count=0;
function startTrafficSignal() {
    dimAll();
        for (let i = 0; i < colorR.length; i++) {
           colorR[i].style.opacity='1'  ;
        }
        colorG[count].style.opacity='1';
        colorR[count].style.opacity='0.4';
  
   setTimeout(() => {
    colorG[count].style.opacity='0.4';
    colorY[count].style.opacity='1';
        
       setTimeout(() => {
        if (colorY[count]) {
            colorY[count].style.opacity='0.4';
            colorR[count].style.opacity='1';

            count=(count+1) % 4;

            startTrafficSignal();     
        }
       
       }, 3000);
      
    }, 5000);
}
startTrafficSignal()


// let second = 3;
// colorY[count].innerHTML = second;

// let timer = setInterval(() => {
//     second--;
//     if (second > 0) {
//         colorY[count].innerHTML = second;
//     } else {
//         clearInterval(timer);
//         colorY[count].innerHTML = 'G';
//         colorY[count].style.opacity = '0.4';
        
//         count = (count + 1) % 4;
//         startTrafficSignal(); 
//     }
// }, 1000);



