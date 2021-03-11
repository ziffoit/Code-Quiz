function getQuizQuestion(question, answer1, answer2, answer3, answer4, previousResult) {
    return (
      <div>  
        <h1>{question}</h1>
        <button>{answer1}</button>
        <button>{answer2}</button>
        <button>{answer3}</button>
        <button>{answer4}</button>
        <div>
            {previousResult}
        </div>
      </div>  
    )
}
function render() {
  getQuizQuestion("WTF?", "Right?", "Shit!", "Fuck!", "ShitFuck!", "")
}
render()