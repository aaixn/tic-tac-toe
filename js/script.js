const player1 = document.querySelector('#player-1')                 // grab players
const player2 = document.querySelector('#player-2')
const playAgain = document.querySelector('#play-again')
const submit = document.querySelector('#submit')
const player1_name = document.querySelector('#player1_name')
const player2_name = document.querySelector('#player2_name')
const modal = document.querySelector('#modal')

const ticTacToeBox = document.querySelectorAll('.tic-tac-toe-box')
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
    } return false
}

let taken = false
function checkIfTaken() {
    if(event.srcElement.innerText !== '') {
        taken = true
    } else {
        taken = false
    }
}


function checkIfAllFilled() {
    let boxesArray = Array.from(ticTacToeBox)
    const allFilled = boxesArray.every(element => element.innerText !== '')
    if (allFilled === true && checkForWins() === false) {
        alert('Its a tie')
        playAgain.style.display =  'block'
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
        player = player1.innerText
        player1.style.color = '#CF616F'
        player1Choice()
        player1.style.color = 'white'
        player2.style.color = '#61CFC1'
    } else if (turn%2 === 0){
        player = player2.innerText
        player2.style.color = '#61CFC1'
        player2Choice()
        player2.style.color = 'white'
        player1.style.color = '#CF616F'
    }            
}


ticTacToeBox.forEach(element => {
    element.addEventListener('click', evt => {
        evt.preventDefault()
        turn++
        checkIfTaken()
        if (taken === false) {
            whoseTurn(turn)
            checkForWins()
            checkIfAllFilled()
        } else if (taken === true ) {
            alert('That spot is taken! Choose another.')
            turn--
        }
    }
)})


playAgain.addEventListener('click', evt => {
    evt.preventDefault()
    ticTacToeBox.forEach(element => element.innerText = '')
    turn = 0
    player1.style.color = '#CF616F'
    player2.style.color = 'white'
})


submit.addEventListener('click', evt => {
    evt.preventDefault()
    if (player1_name.value === '') {
        player1.innerText = 'Player 1'
    } else {
        player1.innerText = player1_name.value
    }

    if (player2_name.value === '') {
        player2.innerText = 'Player 2'
    } else {
        player2.innerText = player2_name.value
    }
    modal.style.display = 'none'
})
