var timerCount = 60
var previousResult = document.querySelector("#previousResult")
var startQuizBtn = document.querySelector("#startQuiz")
var titlePage = document.querySelector("#titlePage")
var timer;
var timerElement = document.querySelector(".timer")
//executed when start button is clicked
function startQuiz() {
    titlePage.setAttribute("class", "hidden")
    startTimer()
    //hide titlePage section show question 1
    previousResult.textContent = ""
    renderQuestion1()
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
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