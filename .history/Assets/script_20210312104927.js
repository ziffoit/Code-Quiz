var timerCount = 60
var previousResult = document.querySelector("#previousResult")
var startQuizBtn = document.querySelector("#startQuiz")
var titlePage = document.querySelector("#titlePage")
var quizQuestion = document.querySelector("#quizQuestion")
var quizSection = document.querySelector("#quizSection")
var timer;
var timerElement = document.querySelector(".timer")
var questionsArray = [
    {
        question:"Commonly used data types DO NOT include:",
        answer:["strings", "booleans", "alerts", "numbers"],
        correctAnswer:"alerts"
    },
]
var questionTracker = 0
//executed when start button is clicked
function startQuiz() {
    titlePage.setAttribute("class", "hidden")
    timer = setInterval(startTimer, 1000)
    timerElement.textContent = timerCount
    //hide titlePage section show question 1
    previousResult.textContent = ""
    renderQuestion1()
}

function startTimer() {
    timerCount--
    timerElement.textContent = timerCount
    // Sets timer
    // timer = setInterval(function() {
    //   timerCount--;
    //   timerElement.textContent = timerCount;
    // //   if (timerCount >= 0) {
    // //     // Tests if win condition is met
    // //     // if (timerCount > 0) {
    // //     //   // Clears interval and stops timer
    // //     //   clearInterval(timer);
    // //     }
    // //   }
    //   // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }
function renderQuestion1() {
  var getQuestion = questionsArray[questionTracker]
  quizQuestion.textContent = getQuestion.question
    for (let i = 0; i < getQuestion.answer.length; i++) {
        const answer = getQuestion.answer[i];
        var button = document.createElement("button")
        button.textContent = answer
        quizSection.append(button)
    }
}

function correctAnswer() {
    previousResult.textContent = "Correct!"
}
//previousResult was wordBlank
function incorrectAnswer() {
    previousResult.textContent = "Incorrect!"
}


startQuizBtn.addEventListener("click", startQuiz)