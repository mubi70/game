// Coin toss function
function coinToss() {
    return Math.random() < 0.5 ? 'head' : 'tail';
}

// Dice roll function
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let currentPlayer = 'Player 1'; // Start with Player 1

document.getElementById('toss-button').addEventListener('click', function() {
    const player1Choice = document.getElementById('player1-choice').value;
    const tossResult = coinToss();
    const tossResultText = `Toss result: ${tossResult}`;

    document.getElementById('toss-result').textContent = tossResultText;

    // Determine the first player
    if (player1Choice === tossResult) {
        currentPlayer = 'Player 1';
    } else {
        currentPlayer = 'Player 2';
    }

    document.getElementById('current-player').textContent = `${currentPlayer}'s turn`;
    document.getElementById('coin-toss-section').style.display = 'none';
    document.getElementById('dice-section').style.display = 'block';
});

document.getElementById('roll-dice-button').addEventListener('click', function() {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const diceResultText = `Dice 1: ${dice1}, Dice 2: ${dice2}`;

    document.getElementById('dice-result').textContent = diceResultText;

    // Check if both dice show 6
    if (dice1 === 6 && dice2 === 6) {
        // Display the dice result and win message
        document.getElementById('winner-message').innerHTML = `
            <p>${currentPlayer} wins with two 6's!</p>
            <p>Win the match</p>
        `;
        document.getElementById('dice-section').style.display = 'none';  // Hide dice section after win
    } else {
        // Switch to the other player
        currentPlayer = currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
        document.getElementById('current-player').textContent = `${currentPlayer}'s turn`;
    }
});
