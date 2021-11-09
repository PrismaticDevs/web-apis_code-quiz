// Entire Page Element -not currently being used
const quizPage = document.getElementById('quiz');
// DOM Elements for Quiz Generation
const nextBtn = document.createElement('button');
const backBtn = document.createElement('button');
const showCurrent = document.createElement('h1');
const title = document.createElement('h1');
const timer = document.createElement('h2');
const footer = document.createElement('footer');
const contentDiv = document.createElement('div');
const startBox = document.createElement('div');
const startButton = document.createElement('button');
// Ordered List Creation
const ol = document.createElement('ol');
let li = document.createElement('li');
// Appending the DOM Elements
quizPage.appendChild(title);
quizPage.appendChild(timer);
quizPage.appendChild(footer);
quizPage.appendChild(contentDiv);
quizPage.appendChild(startBox);
quizPage.appendChild(startButton);
quizPage.appendChild(showCurrent);
showCurrent.style.display = 'block';
startButton.style.display = 'block';
startButton.textContent = "Start";
startBox.style.fontSize = '1.5em';
footer.style.display = 'block';
footer.textContent = "Prismatic Development Studios";
title.textContent = "Web Development Quiz";
title.style.display = 'block';
timer.style.display = 'block';
quizPage.appendChild(ol);
contentDiv.appendChild(backBtn);
contentDiv.appendChild(nextBtn);
ol.appendChild(li);
// startBox 
startBox.textContent = "Welcome to the Prismatic Development Studios' web developer quiz. Click the start button to begin the timed quiz. You will have 15 minutes to complete this quiz, which will show your results immediately upon it's completion"
    // Individual questions
const q1 = '1. What basic JavaScript method prints out values that a developer can see?'
    // condole.log() 
const q2 = '2. Which of these options are part of the 3 different "stack"s of web development?';
// Front end, Back end, Full stack
const q3 = '3. What is the difference between a "var" and a "const" in JavaScript?';
// A var is a value that can be changed multiple times 
const q4 = '4. What does the acronym "API" stand for?';;
//  Application programming interface
const q5 = '5. What is a turnary operator?';
// it's ahort hand syntax for an if statement
const q6 = '6. What is another name for a function in JavaScript?';
// Method
const q7 = '7. What is the statement that commonly follows an "if" statement?';
// Else
const q8 = '8. "What is the commonly used web framework invented by Facebook?';
// Reaact
const q9 = '9. What is another commonly used web framework that was invented by a Google employee?';
// Angular
const q10 = '10. "Which of the following is not a testing framework?';
// Jest, Mocha, Jasmine, Nightwatch, Joker
const bonus = "What is an urnary operator?";
// Questions Array
const quiz = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
for (let i = 0; i < quiz.length; i++) {
    li = 0;
    li++
    li = document.createElement('li');
    ol.appendChild(li).textContent = quiz[i];
}
// Start Variable
let start = false;
let time = 900000;
timer.style.marginLeft = "5%";
if (start === false) {
    nextBtn.style.display = 'none';
    backBtn.style.display = 'none';
    timer.style.display = 'none';
}
// Start quiz
let quizOver = false;

function startQuiz() {
    startButton.style.display = 'none';
    startBox.style.display = 'none';
    current = 1;
    ol.children[current].style.display = 'block';
    nextBtn.disabled = false;
    nextBtn.style.display = 'block';
    backBtn.style.display = 'block';
    timer.style.display = 'block';

    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes

        function tick() {
            //This script expects an element with an ID = "counter". You can change that to what ever you want. 
            var counter = timer;
            var current_minutes = mins - 1
            seconds--;
            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                if (mins > 1) {
                    countdown(mins - 1);
                }
            }
        }
        tick();
    }
    countdown(15);
}
// Initialize Current Question
let current = 0;
// Increment Current ?
function next() {
    if (current === quiz.length) {
        current = 0;
    }
    current++;
    ol.children.innerHTML = quiz[current];
    if (ol.children[current]) {
        ol.children[current].style.display = 'block';
        ol.children[current - 1].style.display = 'none';
    }
    if (current !== 10) {
        ol.children[10].style.display = 'none';
    }
    showCurrent.textContent = current + '/' + '10';
}
// Decrement Current ?
function back() {
    if (current < 0) {
        current = 10
    }
    current--;
    ol.children.innerHTML = quiz[current];
    if (ol.children[current]) {
        ol.children[current].style.display = 'block';
        ol.children[current + 1].style.display = 'none';
    }
    if (current <= 0) {
        current = 10;
    }
    if (current === 10) {
        ol.children[current].style.display = 'block';
    }
    showCurrent.textContent = current + '/' + '10';
}
// Next Btn Click Event Listener
nextBtn.addEventListener('click', () => {
    next();
});
// Next Btn Click Event Listener
backBtn.addEventListener('click', () => {
    back();
});
startButton.addEventListener('click', () => {
    startQuiz();
});
// Styling
showCurrent.setAttribute('class', 'current');
//nextBtn
nextBtn.setAttribute("class", "nextBtn");
nextBtn.innerHTML = '&#187';
//nextBtn
backBtn.setAttribute("class", "backBtn");
backBtn.innerHTML = '&#171';
// Central Div
contentDiv.style.height = '100px';
contentDiv.style.width = '100vw';
contentDiv.style.display = 'block';
contentDiv.style.position = 'absolute';
// Start Button
startButton.style.position = 'absolute';
startButton.setAttribute('class', 'startBtn');
// startBox
startBox.setAttribute('class', 'startBox')
startBox.style.position = 'absolute';
// Misc Elements
ol.setAttribute('class', 'li');
title.style.textAlign = 'center';