const startButton = document.getElementById('start-btn')
const questionContainerElement= document.getElementById('question-container')
const homePage = document.getElementById('start-page')
const allQuestions = document.getElementById('question')
let answerOne= document.getElementById('Answer1')
let answerTwo= document.getElementById('Answer2')
let answerThree= document.getElementById('Answer3')
let answerFour= document.getElementById('Answer4')

//going to attempt to get some questions going//

let index=0;

let questArray = [
    {

        question: "What is NOT considered a type of primitive data: ",
        answerChoices: ["1. Booleans", "2. Strings.", "3. Flex.", "4. Numbers."],
        rightAnswer: "3. Flex"
    }
]















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