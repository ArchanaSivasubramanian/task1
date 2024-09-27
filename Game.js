let score = 0;
let currentquestion = 0;
let questions = [
    {
        question: " What is the largest lake in the world?",
        Options:["CaspianSea","Baikal","LakeSuperior","Ontario"],
        correct: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        correct:2
    },
    {
        question:"Which planet in the solar system is known as the “Red Planet”?",
        options: ["Mars", "Jupiter", "Saturn", "Earth"],
        correct:1
    },
    {
        question:"What is the capital of Japan?",
        options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
        correct:1
    },
];

document.addEventListner("DOMContentLoaded", function () {
    displayQuestion()
});
    
function displayQuestion() {
    let questionText = document.getElementById("question-text");
    let options = document.querySelectorAll(".option");
    let scoreText = document.getElementById("score-text");
    
    questionText.textContent = questions[currentquestion].question;

    for (let i = 0; i < options.length; i ++){
        options[i].textContent = questions[currentquestion].options[i];
        options[i].addEventListener("click", function() {
            checkAnswer(this.textContent);
        });
    }
}
function checkAnswer(userAnswer) {
    if(answer === questions[currentQuestion].options[questions[currentQuestion].correct]) {
        score++;
}

}

if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
} else{
    alert('Game over! Your final score is ${score} out of {questions.length}' );
}




