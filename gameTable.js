let score = 0;
let size = 2;
let timer = 10;
let isPaused = false;
let height = 90;
let weight = 90;
let myInterval = null;

let container = document.getElementById('game');
let pauseBtn = document.getElementById('pause-btn');
let resumeBtn = document.getElementById('resume-btn');
let startBtn = document.getElementById('start-btn');
let items = document.getElementById('items');

items.style.display = "none";
container.style.display = "none";
resumeBtn.style.display = "none";

function startGame() {
    startBtn.style.display = "none";
    items.style.display = "flex";
    container.style.display = "flex";
    startTimer();
    createTable();
}

function startTimer() {
    myInterval = setInterval(function myTimer() {
        if (!isPaused) {
            timer--;
            document.getElementById("timer").innerHTML = timer;

            if (timer == 0) {
                alert("Game is over");
                alert(`Your Score is ${score}`);

                clearInterval(myInterval);
                timer = 50;
                score = 0;
                size = 2;

                document.getElementById('score').innerHTML = "";
                startBtn.style.display = "block";
                items.style.display = "none";
                container.style.display = "none";
            }
        }
    }, 1000);
}

function sizeIncrease() {
    if (isPaused) return;

    size++;
    score++;

    // Stop growing after 10x10 (full screen approx)
    if (size > 10) size = 10;

    document.getElementById('score').innerHTML = score;
    createTable();
}
// function sizeIncrease() {
//     if (isPaused) return;

//     score++;
//     document.getElementById('score').innerHTML = score;

//     let maxRows = Math.floor(window.innerHeight / 40);
//     let maxCols = Math.floor(window.innerWidth / 40);

//     let maxSize = Math.min(maxRows, maxCols);

//     if (size < maxSize) {
//         size++;
//     }

//     createTable();
// }
function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "inline-block";
}

function resumetimer() {
    isPaused = false;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
}

function createTable() {

    const randomColor = ["blue", "purple", "green", "pink", "gray", "yellow", "orange"];
    let colorRandom = Math.floor(Math.random() * randomColor.length);
    let choosenRandomColor = randomColor[colorRandom];

    let rowRandom = Math.floor(Math.random() * size);
    let colRandom = Math.floor(Math.random() * size);

    container.innerHTML = "";
    let table = document.createElement('table');

    for (let i = 0; i < size; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            let td = document.createElement('td');
            td.style.backgroundColor = choosenRandomColor;

            if (i == rowRandom && j == colRandom) {
                td.style.opacity = "0.6";
                td.addEventListener('click', sizeIncrease);
            }

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
}






<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Table Game</title>

<style>

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
}

h1 {
    text-align: center;
    margin-top: 20px;
    color: white;
}

#start-btn {
    display: block;
    margin: 200px auto;
    padding: 15px 30px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    background: #4CAF50;
    color: white;
    cursor: pointer;
}

#items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background: rgba(0,0,0,0.2);
    color: white;
}

#game {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
}

table {
    width: 80vmin;
    height: 80vmin;
    table-layout: fixed;
    border-collapse: collapse;
}
/* #game {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

table {
    width: 100%;
    height: 100%;
    table-layout: fixed;
    border-collapse: collapse;
} */

td {
    border: 1px solid white;
    border-radius: 6px;
    transition: 0.2s ease;
    cursor: pointer;
}

td:hover {
    transform: scale(0.95);
}

button {
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

#pause-btn {
    background: orange;
    color: white;
}

#resume-btn {
    background: green;
    color: white;
}

</style>
</head>

<body>

<h1>Table Game</h1>

<button id="start-btn" onclick="startGame()">Start Game</button>

<div id="items">
    <h3>Score : <span id="score"></span></h3>
    <h3>Time : <span id="timer">50</span></h3>
    <div>
        <button id="pause-btn" onclick="pauseTimer()">Pause</button>
        <button id="resume-btn" onclick="resumetimer()">Resume</button>
    </div>
</div>

<div id="game"></div>

<script src="game.js"></script>

</body>
</html>
