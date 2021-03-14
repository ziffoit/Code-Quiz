var timerCount = 60
var previousResult = document.querySelector("#previousResult")
var startQuizBtn = document.querySelector("#startQuiz")
var titlePage = document.querySelector("#titlePage")
var quizQuestion = document.querySelector("#quizQuestion")
var quizSection = document.querySelector("#quizSection")
var timer;
var timerElement = document.querySelector(".timer")
var endPage = document.querySelector("#endPage")
var finalScore = document.querySelector("#finalScore")
var initials = document.querySelector("#initials")
var initialsForm = document.querySelector("#initialsForm")
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
endPage.setAttribute("class", "hidden")
//executed when start button is clicked
// local storage for keeping highscores
function startQuiz() {
    questionTracker = 0
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
      if (timerCount <= 0) {
        // Clears interval through renderEndPage
        renderEndPage()
      }
    }
function renderQuestion() {
    if (questionTracker >= questionsArray.length){
        renderEndPage()
        return
    }
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
    while (buttons.length > 0) {
        buttons[0].remove()
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
//timer penalty for wrong answer
function incorrectAnswer() {
    loadNextQuestion()
    previousResult.textContent = "Incorrect!"
    timerCount = timerCount - 20
    
}
// end of quiz
function renderEndPage() {
    var score = timerCount
    finalScore.textContent = score
    quizSection.setAttribute("class", "hidden")
    timerElement.setAttribute("class", "hidden")
    clearInterval(timer)
    endPage.removeAttribute("class")
    
}

function saveHighScores(event) {
    event.preventDefault()
    var nameScore = {
        name: initials.value,
        score: finalScore.textContent
    }

    localStorage.setItem("score", JSON.stringify(nameScore))
    endPage.setAttribute("class", "hidden")
    titlePage.removeAttribute("class")
}

startQuizBtn.addEventListener("click", startQuiz)
initialsForm.addEventListener("submit", saveHighScores)