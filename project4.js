const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#submit');
const priviousGuesses = document.querySelector('.guess');
const lastResult = document.querySelector('.lastResult');
const lowoHigh = document.querySelector('.lowOrHe');
const userInput = document.querySelector('#guessfield');
const startOver=document.querySelector('.resultparas')

const p=document.createElement('p')
let previousGuesses = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number greater than 0");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        previousGuesses.push(guess);
        if (numGuess > 10) {
            displayGuesses(guess);
            displayMessage("Game over");
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right!');
    } else if (guess < randomNumber) {
        displayMessage("Number is too low");
    } else if (guess > randomNumber) {
        displayMessage("Number is too high");
    }
}

function displayGuesses(guess) {
    userInput.value = '';
    priviousGuesses.innerHTML += `${guess}  `;
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowoHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')

    p.classList.add('button')
    p.innerHTML='<h2 id="newgame">start newgame</h2>';
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function endGame() {
    // Implement this function if needed
   const newGame= document.querySelector('#newgame')
   newGame.addEventListener('click',function (e) {
    numGuess=1
    previousGuesses.innerHTML=' ';
    lastResult.innerHTML = `${11 - numGuess}`;
    userInput,removeAtribute('disabled')
    startOver.removeChild(p)

    playGame=true
   })
}
