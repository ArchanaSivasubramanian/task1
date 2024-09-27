// let score = 0;
// let currentquestion = 0;
// let questions = [
//     {
//         question: " What is the largest lake in the world?",
//         Options:["CaspianSea","Baikal","LakeSuperior","Ontario"],
//         correct: 0
//     },
//     {
//         question: "What is the largest planet in our solar system?",
//         options: ["Earth", "Saturn", "Jupiter", "Uranus"],
//         correct:2
//     },
//     1
//     {
//         question:"What is the capital of Japan?",
//         options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
//         correct:1
//     },
//     {
//       question:"Which planet in the solar system is known as the “Red Planet”?",
//       options: ["Mars", "Jupiter", "Saturn", "Earth"],
//       correct:1
//   },
// ];

// document.addEventListner("DOMContentLoaded", function () {
//     displayQuestion()
// });
    
// function displayQuestion() {
//     let questionText = document.getElementById("question-text");
//     let options = document.querySelectorAll(".option");
//     let scoreText = document.getElementById("score-text");
    
//     questionText.textContent = questions[currentquestion].question;

//     for (let i = 0; i < options.length; i ++){
//         options[i].textContent = questions[currentquestion].options[i];
//         options[i].addEventListener("click", function() {
//             checkAnswer(this.textContent);
//         });
//     }
// }
// function checkAnswer(userAnswer) {
//     if(answer === questions[currentQuestion].options[questions[currentQuestion].correct]) {
//         score++;
// }

// }

// if (currentQuestion < questions.length - 1) {
//     currentQuestion++;
//     displayQuestion();
// } else{
//     alert('Game over! Your final score is ${score} out of {questions.length}' );
// }


// let score = 0;
// let currentQuestion = 0;
// let questions = [
//     {
//         question: "What is the capital of France?",
//         options: ["Paris", "London", "Berlin", "Rome"],
//         correctAnswer: 0
//     },
//     {
//         question: "What is the largest planet in our solar system?",
//         options: ["Earth", "Saturn", "Jupiter", "Uranus"],
//         correctAnswer: 2
//     },
//     {
//         question:"What is the capital of Japan?",
//         options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
//         correct:3
//     },
//     {
//         question:"Which planet in the solar system is known as the “Red Planet”?",
//       options: ["Mars", "Jupiter", "Saturn", "Earth"],
//       correct:1
//     },

// ];

// document.addEventListener("DOMContentLoaded", function() {
//     displayQuestion();
// });

// function displayQuestion() {
//     let questionText = document.getElementById("question-text");
//     let options = document.querySelectorAll(".option");
//     let scoreText = document.getElementById("score-text");

//     questionText.textContent = questions[currentQuestion].question;

//     for (let i = 0; i < options.length; i++) {
//         options[i].textContent = questions[currentQuestion].options[i];
//         options[i].addEventListener("click", function() {
//             checkAnswer(this.textContent);
//         });
//     }

//     scoreText.textContent = `Score: ${score}`;
// }

// function checkAnswer(answer) {
//     if (answer === questions[currentQuestion].options[questions[currentQuestion].correctAnswer]) {
//         score++;
//     }
//     currentQuestion++;
//     if (currentQuestion < questions.length) {
//         displayQuestion();
//     } else {
//         alert(`Game over! Your final score is ${score}`);
//     }
// }

   // Add event listener to the "Get Started" button
//  document.querySelector('button').addEventListener('click', () => {
//     // Scroll to the destinations section
//     document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth' });
//   });

  
  
//   // Add event listener to the form submission
//   document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     // Get the form data
//     const name = document.querySelector('input[type="text"]').value;
//     const email = document.querySelector('input[type="email"]').value;
//     const message = document.querySelector('textarea').value;
    
//     // Display a success message
//     alert(`Thank you, ${name}! Your message has been sent.`);
    
//     // Clear the form fields
//     document.querySelector('input[type="text"]').value = '';
//     document.querySelector('input[type="email"]').value = '';
//     document.querySelector('textarea').value = '';
//   });/






// document.addEventListener('DOMContentLoaded', () => {
//     const consultButton = document.querySelector('.banner button');
//     consultButton.addEventListener('click', () => {
//         alert('Consultation request submitted!');
//     });

//     const learnMoreButtons = document.querySelectorAll('.services button, .healthcare button, .articles-card button');
//     learnMoreButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             alert('More information will be available soon!');
//         });
//     });
// });


function explore(){
    alert("Welcome to the odin project website! Enjoy exploring the  resources")
}