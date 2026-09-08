let playerScore = 0;
let computerScore = 0;

const pScoreEl = document.getElementById('player-score');
const cScoreEl = document.getElementById('computer-score');
const pHandEl = document.getElementById('player-hand');
const cHandEl = document.getElementById('computer-hand');
const messageEl = document.getElementById('game-message');
const buttons = document.querySelectorAll('.choice-btn');
const resetBtn = document.getElementById('reset-btn');

const choices = ['rock', 'paper', 'scissors'];
const emojiMap = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        playRound(playerChoice);
    });
});

resetBtn.addEventListener('click', resetGame);

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(player) {
    const computer = getComputerChoice();
    
    pHandEl.textContent = emojiMap[player];
    cHandEl.textContent = emojiMap[computer];

    if (player === computer) {
        messageEl.textContent = "It's a tie!";
        messageEl.style.color = '#333';
        return;
    }

    const playerWins = 
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper');

    if (playerWins) {
        playerScore++;
        pScoreEl.textContent = playerScore;
        messageEl.textContent = 'You win this round!';
        messageEl.style.color = '#28a745'; 
    } else {
        computerScore++;
        cScoreEl.textContent = computerScore;
        messageEl.textContent = 'Computer wins this round!';
        messageEl.style.color = '#dc3545';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    pScoreEl.textContent = '0';
    cScoreEl.textContent = '0';
    pHandEl.textContent = '❓';
    cHandEl.textContent = '❓';
    messageEl.textContent = 'Choose your weapon to start!';
    messageEl.style.color = '#333';
}