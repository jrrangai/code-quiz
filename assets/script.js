var timeLeft = 20
var time =timeLeft
var intervalId
var score = 0

var timerEl = document.getElementById('timer')
var scoreEl = document.getElementById('score')
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
        Question:"What does HTML stand for?",
        Option1:"Hyper Text Markup Language",
        Option2:"Hyperlinks and Text Markup Language",
        Option3:"Home Tool Markup Langauge",
        Option4:"Hover Til Mouse Links",
        RightAnswer: "Hyper Text Markup Language", 
    },
    {
        Question:"What does CSS stand for?",
        Option1:"Computer Style Sheets",
        Option2:"Creative Style Sheets",
        Option3:"Colorful Style Sheets",
        Option4:"Cascading Style Sheets",
        RightAnswer: "Cascading Style Sheets", 
    },
    {
        Question:"What is the correct place to insert a JavaScript?",
        Option1:"Both the <head> section and the <body> section are correct",
        Option2:"The <head> section",
        Option3:"The <body> section",
        Option4:"Right above your CSS link",
        RightAnswer: "The <body> section", 
    },
    {
        Question:"Which sign does jQuery use as a shortcut for jQuery?",
        Option1:"$",
        Option2:"J@",
        Option3:"%",
        Option4:"#",
        RightAnswer: "$", 
    },
    {
        Question:"The Bootstrap grid system is based on how many columns?",
        Option1:"9",
        Option2:"12",
        Option3:"6",
        Option4:"4",
        RightAnswer: "12", 
    },
]

startButton.addEventListener('click', function() {
    quizStart()
    displayQuestions()
    quizBox.setAttribute("style", "display: flex")
    startButton.setAttribute("style", "display: none")
})

Option1.addEventListener('click', function (event) {
    // call checkAnswer Function
    checkAnswer(event.target.innerText );
    // index++;
})

Option2.addEventListener('click', function (event) {
    checkAnswer(event.target.innerText);
    // index++;
})

Option3.addEventListener('click', function (event) {
    checkAnswer(event.target.innerText);
    // index++;
})

Option4.addEventListener('click', function (event) {
    checkAnswer(event.target.innerText);
    // index++;
})

function checkAnswer(correctAnswer){
    
    if (correctAnswer === question[index].RightAnswer) {
        score++
        alert('Correct!')
    } else {
        score--
        alert('Wrong!')
    }

    scoreEl.innerText = "Score: " + score

    if (index > question.length - 2) {
        gameOver()
    } else {
        index++;
        displayQuestions()
    }
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
        timerEl.innerText = "Timer: " + time
        if (time === 0 ) {
            clearInterval(intervalId)
            gameOver()
        }
    }, 1000)
}

function quizStart() {
    startTimer()
}
