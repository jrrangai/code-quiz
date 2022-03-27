var timeLeft = 3
var time =timeLeft
var intervalId
var timerEl = document.getElementById('timer')

score = 0

var startButton = document.getElementById('startBtn')

var index = 0
var questionEl = document.getElementById('question')
var Option1= document.getElementById('option1')
var Option2= document.getElementById('option2')
var Option3= document.getElementById('option3')
var Option4= document.getElementById('option4')
var quizBox = document.getElementById('quiz')
var question = [
    {
        Question:"Q1",
        Option1:"A",
        Option2:"B",
        Option3:"C",
        Option4:"D",
        RightAnswer: "A", 
    },
    {
        Question:"Q2",
        Option1:"A",
        Option2:"B",
        Option3:"C",
        Option4:"D",
        RightAnswer: "D", 
    },
    {
        Question:"Q3",
        Option1:"A",
        Option2:"B",
        Option3:"C",
        Option4:"D",
        RightAnswer: "C", 
    },
    {
        Question:"Q4",
        Option1:"A",
        Option2:"B",
        Option3:"C",
        Option4:"D",
        RightAnswer: "A", 
    },
    {
        Question:"Q5",
        Option1:"A",
        Option2:"B",
        Option3:"C",
        Option4:"D",
        RightAnswer: "B", 
    },
]



startButton.addEventListener('click', function() {
    displayQuestions()
    quizBox.setAttribute("style", "display: flex")
    startButton.setAttribute("style", "display: none")
})

Option1.addEventListener('click', function () {
    // call checkAnswer Function
    index++;
    displayQuestions()
})

Option2.addEventListener('click', function () {
    index++;
    displayQuestions()
})

Option3.addEventListener('click', function () {
    index++;
    displayQuestions()
})

Option4.addEventListener('click', function () {
    index++;
    displayQuestions()
})

function checkAnswer(){

}


function displayQuestions() {
    questionEl.innerText = question[index].Question
    Option1.innerText =question[index].Option1
    Option2.innerText =question[index].Option2
    Option3.innerText =question[index].Option3
    Option4.innerText =question[index].Option4
}

function gameOver() {
    clearInterval(intervalId)
    var name = prompt('What is your name?')
    var data = {Name: name, score: score}
    localStorage.setItem('QuizMaster', JSON.stringify(data))

    var playAgain = confirm('Want to try again?')
    if (playAgain) {
        window.location.reload()
    }
}

function startTimer(){
    intervalId = setInterval(function () {
        time --
        timerEl.innerText = "timer " + time
        if (time === 0) {
            clearInterval(intervalId)
            gameOver()
        }
    }, 1000)
}

function quizStart() {
    startTimer()
}

quizStart()

// function to check the answer (if statement -5 from time if incorrect)
// function set interval (change inner.text to time left) (if timeleft = 0 || if index >= 5 then (then show form and end quiz))
// start a function to count down time