var timerCount
var previousResult = document.querySelector("#previousResult")
var startQuizBtn = document.querySelector("#startQuiz")
var titlePage = document.querySelector("#titlePage")

//executed when start button is clicked
function startQuiz() {
    titlePage.setAttribute("class", "hidden")
    //hide titlePage section show question 1
    timerCount = 60;
    previousResult.textContent = ""
    renderQuestion1()
}

function renderQuestion1() {

}

function correctAnswer() {
    previousResult.textContent = "Correct!"
}
//previousResult was wordBlank
function incorrectAnswer() {
    previousResult.textContent = "Incorrect!"
}


startQuizBtn.addEventListener("click", startQuiz)