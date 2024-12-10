// Define a pool of riddles and their answers
const riddles = [
    { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "echo" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
    { question: "I fly without wings, I cry without eyes. Whenever I go, darkness flies. What am I?", answer: "cloud" },
    { question: "I am always ahead of you, yet how come you never see me?", answer: "the future" }
];

// Select a random riddle from the pool
const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
document.getElementById('riddle').textContent = randomRiddle.question;

// Handle the answer submission
document.getElementById('submit-answer').addEventListener('click', () => {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    
    if (userAnswer === randomRiddle.answer) {
        alert("You pass the test!");
    } else {
        alert("You feel a slight tremble in the room... The ceiling is caving in... You have failed!");
    }
});
