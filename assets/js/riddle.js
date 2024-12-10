// Define a pool of riddles and their answers
const riddles = [
    { question: "I am never ending hunger - My fury, blistering heat. I do not what a touch might feel like, but in darkness I make shadows retreat.", answer: "fire" },
    { question: "I am inevitable. All things must one day succumb to me, from small birds, to foul beasts. Neither stone nor steel can prolong and resist. Your deaths I will claim without fail, I insist.", answer: "time" },
    { question: "I soar the skies, wingless... I cry without eyes. Whenever, wherever I may go, darkness surely arrives", answer: "cloud" },
    { question: "Neither friend, nor foe. You will never truly know. Though I am always ahead of you, you never can see me... can you?", answer: "future" }
];

// Select a random riddle from the pool
const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
document.getElementById('riddle').textContent = randomRiddle.question;

// Handle the answer submission
document.getElementById('submit-answer').addEventListener('click', () => {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    
    if (userAnswer === randomRiddle.answer) {
        alert("The wall on the opposite side, slowly slide open as light streams in... You pass the test!");
    } else {
        alert("You feel a slight tremble in the room... The ceiling is caving in... You have failed!");
    }
});
