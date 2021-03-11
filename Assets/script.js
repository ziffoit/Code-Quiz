var timerCount;
var previousResult = document.querySelector(".word-blanks");


//executed when start button is clicked
function startQuiz() {
    timerCount = 60;
    previousResult.textContent = ""
}

function correctAnswer() {
    previousResult.textContent = "Correct!"
}
//previousResult was wordBlank
function incorrectAnswer() {
    previousResult.textContent = "Incorrect!"
}