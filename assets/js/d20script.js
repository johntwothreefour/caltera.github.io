document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const dice = document.getElementById('dice');
    const resultText = document.getElementById('diceResult');

    // Add the diceRolling class to start the animation
    dice.classList.add('diceRolling');
    resultText.textContent = 'Rolling...';

    // Simulate a 20-sided dice roll (random number between 1 and 20)
    setTimeout(() => {
        const roll = Math.floor(Math.random() * 20) + 1;
        dice.src = `images/dice${roll}.png`;  // Change the dice image
        dice.alt = `Dice showing ${roll}`;

        // After animation, remove the diceRolling class and update the result text
        setTimeout(() => {
            dice.classList.remove('diceRolling');
            resultText.textContent = `You rolled ${roll}!`;
        }, 1000);  // Wait for animation to finish before removing class
    }, 1000);  // Delay for the initial "rolling" effect
}
