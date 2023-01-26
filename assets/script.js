const startButton = document.getElementById('start-btn')
const questionContainerElement= document.getElementById('question-container')
const homePage = document.getElementById('start-page')
const allQuestions = document.getElementById('question')
let answerOne= document.getElementById('Answer1')
let answerTwo= document.getElementById('Answer2')
let answerThree= document.getElementById('Answer3')
let answerFour= document.getElementById('Answer4')

startButton.addEventListener('click', startGame)


function startGame() {
    console.log('Started')
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
}
function setNextQuestion() {

}

function selectAnswer() {

}