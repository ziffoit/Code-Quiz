var scoreList = document.querySelector("#scoreList")

var scores = JSON.parse(localStorage.getItem("score")) || []
for (let i = 0; i < scores.length; i++) {
    const currentScore = scores[i];
    var listItem = document.createElement("li")
    listItem.textContent = `${currentScore.score} - ${currentScore.name}`
    scoreList.append(listItem)
}