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
    {
        question:"The condition within an if/else statement is enclosed within:",
        answer:["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer:"parentheses"
    },
    {
        question:"Arrays in JavaScript can be used to store:",
        answer:["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer:"all of the above"
    },
]
var questionTracker = 0
//executed when start button is clicked
// add penalty to timer for wrong answer
// local storage for keeping highscores
function startQuiz() {
    titlePage.setAttribute("class", "hidden")
    timer = setInterval(startTimer, 1000)
    timerElement.textContent = timerCount
    //hide titlePage section show question 1
    previousResult.textContent = ""
    renderQuestion()
}

function startTimer() {
    timerCount--
    timerElement.textContent = timerCount
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }
function renderQuestion() {
  var currentQuestion = questionsArray[questionTracker]
  quizQuestion.textContent = currentQuestion.question
    for (let i = 0; i < currentQuestion.answer.length; i++) {
        const answer = currentQuestion.answer[i];
        var button = document.createElement("button")
        button.textContent = answer
        button.className = "questionAnswer"
        quizSection.append(button)
        if (answer === currentQuestion.correctAnswer) {
            button.addEventListener("click", correctAnswer)
        } else {
            button.addEventListener("click", incorrectAnswer)
        }
        // when user clicks button for next question questionTracker++
    }
}

function removeButtons() {
    var buttons = document.getElementsByClassName("questionAnswer")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].remove()
    }
}

function loadNextQuestion() {
    questionTracker++
    removeButtons()
    renderQuestion()
}

function correctAnswer() {
    loadNextQuestion()
    previousResult.textContent = "Correct!"
    
}

function incorrectAnswer() {
    loadNextQuestion()
    previousResult.textContent = "Incorrect!"
    
}



startQuizBtn.addEventListener("click", startQuiz)