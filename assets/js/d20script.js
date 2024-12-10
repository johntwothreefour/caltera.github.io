document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const dice = document.getElementById('dice');
    const resultText = document.getElementById('diceResult');

    // diceRolling class to start animation
    dice.classList.add('diceRolling');
    resultText.textContent = 'Rolling...';

    // simulate 20sided roll (random number between 1 and 20)
    setTimeout(() => {
        const roll = Math.floor(Math.random() * 20) + 1;
        dice.src = `images/dice${roll}.png`;  // Change the dice image
        dice.alt = `Dice showing ${roll}`;

        setTimeout(() => {
            dice.classList.remove('diceRolling');
            resultText.textContent = `You rolled ${roll}!`;
        }, 1000); 
    }, 1000);  // Delay for the initial "rolling" effect
}
