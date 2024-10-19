function coinToss() {
    return Math.random() < 0.5 ? 'head' : 'tail';
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let currentPlayer = 'Player 1'; 

document.getElementById('toss-button').addEventListener('click', function() {
    const player1Choice = document.getElementById('player1-choice').value;
    const tossResult = coinToss();
    const tossResultText = `Toss result: ${tossResult}`;

    document.getElementById('toss-result').textContent = tossResultText;

   
    if (player1Choice === tossResult) {
        currentPlayer = 'Player 1';
        enablePlayer('Player 1');
    } else {
        currentPlayer = 'Player 2';
        enablePlayer('Player 2');
    }

    document.getElementById('current-player').textContent = `${currentPlayer}'s turn`;
    document.getElementById('coin-toss-section').style.display = 'none';
    document.getElementById('dice-section').style.display = 'block';
});


function enablePlayer(player) {
    if (player === 'Player 1') {
        document.getElementById('roll-dice-button-1').disabled = false;
        document.getElementById('roll-dice-button-2').disabled = true;
    } else {
        document.getElementById('roll-dice-button-1').disabled = true;
        document.getElementById('roll-dice-button-2').disabled = false;
    }
}


document.getElementById('roll-dice-button-1').addEventListener('click', function() {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const diceResultText = `Dice 1: ${dice1}, Dice 2: ${dice2}`;
    document.getElementById('dice-result-1').textContent = diceResultText;

    if (dice1 === 6 && dice2 === 6) {
        document.getElementById('winner-message').innerHTML = `
            <p>Player 1 wins with two 6's!</p>
            <p>Win the match</p>
        `;
        document.getElementById('dice-section').style.display = 'none'; 
    } else {
        currentPlayer = 'Player 2';
        document.getElementById('current-player').textContent = `${currentPlayer}'s turn`;
        enablePlayer('Player 2');
    }
});

document.getElementById('roll-dice-button-2').addEventListener('click', function() {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const diceResultText = `Dice 1: ${dice1}, Dice 2: ${dice2}`;
    document.getElementById('dice-result-2').textContent = diceResultText;

    if (dice1 === 6 && dice2 === 6) {
        document.getElementById('winner-message').innerHTML = `
            <p>Player 2 wins with two 6's!</p>
            <p>Win the match</p>
        `;
        document.getElementById('dice-section').style.display = 'none'; 
    } else {
        currentPlayer = 'Player 1';
        document.getElementById('current-player').textContent = `${currentPlayer}'s turn`;
        enablePlayer('Player 1');
    }
});
