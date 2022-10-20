const player1 = document.querySelector('#player-1')                 // grab players
const player2 = document.querySelector('#player-2')
const playAgain = document.querySelector('#play-again')

const topRow = document.querySelectorAll('.top-row')                // grab win conditions
const midRow = document.querySelectorAll('.mid-row')
const botRow = document.querySelectorAll('.bot-row')
const leftCol = document.querySelectorAll('.left-column')
const midCol = document.querySelectorAll('.mid-column')
const rightCol = document.querySelectorAll('.right-column')
const leftDiagonal = document.querySelectorAll('.left-diagonal')
const rightDiagonal = document.querySelectorAll('.right-diagonal')


// check the win conditions
let checksIfWin = null
const winConditions = [topRow, midRow, botRow, leftCol, midCol, rightCol, leftDiagonal, rightDiagonal]
function checkForWins() {                                                                                   //use .every() array method
    for (let i = 0;  i < winConditions.length; i++) {
        let checkForSpot = element => element.innerText === event.srcElement.innerText                     
        let array = Array.from(winConditions[i])                                                            // changes nodeList to array: https://stackoverflow.com/questions/3199588/fastest-way-to-convert-javascript-nodelist-to-array                                          
        array.every(checkForSpot)
        let checkIfWin = array.every(checkForSpot);
        if (checkIfWin === true) {
            alert(`${player} won the game!`)
            playAgain.style.display = 'block'
        }
        // else if (i === winConditions.length-1 && checkIfWin === false) {
        //     alert('It\'s a tie')
        // }
    }
}

let taken = false
function checkIfTaken() {
    if(event.srcElement.innerText !== '') {
        taken = true
    } else {
        taken = false
    }
}


function player1Choice() {                                   //function for when player1 makes a choice, mark it
    event.srcElement.innerText = 'x'
    event.srcElement.style.color = '#CF616F'
}

function player2Choice() {                                  //function for when player2 makes a choice, mark it
    event.srcElement.innerText = 'o'
    event.srcElement.style.color = '#61CFC1'
}

player1.style.color = '#CF616F'

let turn = 0
let player = null
function whoseTurn (turn) {
    if (turn%2 === 1) {
        player = 'Player 1'
        player1.style.color = '#CF616F'
        player1Choice()
        player1.style.color = 'white'
        player2.style.color = '#61CFC1'
    } else if (turn%2 === 0){
        player = 'Player 2'
        player2.style.color = '#61CFC1'
        player2Choice()
        player2.style.color = 'white'
        player1.style.color = '#CF616F'
    }            
}


const ticTacToeBox = document.querySelectorAll('.tic-tac-toe-box')
ticTacToeBox.forEach(element => {
    element.addEventListener('click', evt => {
        evt.preventDefault()
        turn++
        checkIfTaken()
        if (taken === false) {
            whoseTurn(turn)
            checkForWins()
        } else if (taken === true ) {
            alert('That spot is taken! Choose another.')
            turn--
        }
    }
)})


