var timeLeft = 60
var timer = document.getElementById('timer')
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

// function to check the answer (if statement -5 from time if incorrect)
// function set interval (change inner.text to time left) (if timeleft = 0 || if index >= 5 then (then show form and end quiz))
// start a function to count down time