// Creating Players
const playerX = 'x';
const playerO = 'o';

// Winning Outcomes
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//Assinging values to HTML elements
const cellElements = document.querySelectorAll('[data-cell]');
const boardElement = $('#board');
const winningMessageElement = $('#win-msg');
const restartButton = $('#restartButton');
const winningMessageTextElement = $('#winMsgText');
let isPlayerOTurn = false

//Function to start a game 
startGame()
restartButton.addEventListener('click', startGame);

function startGame() {
    isPlayerOTurn = false;
    cellElements.forEache(cell => { //Why? This is where im lost
        cell.classList.remove(playerX)
        cell.classList.remove(playerO)
        cell.removeEventListener('click', handleCellClick)
        cell.addEventListener('click', handleCellClick, {once: true})
    });
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
};

//Taking turns
myTurn()

function myTurn() {

};

//Announce Winner
displayWinner()

function displayWinner() {
    if (draw) {
        winningMessageTextElement.innerText = "Its a Draw!"
    } else {
        winningMessageTextElement.innerText = "Player $(idk) Wins!"
    }
};


function isDraw() {
	return [...cellElements].every(cell => {
		return cell.classList.contains(playerrX) || cell.classList.contains(playerO)
	})
}