// Parent Element
const parent = document.getElementById('question-container');

// Get all the elements by their ids
const question = document.getElementById('question');
const Option1 = document.getElementById('Option1');
const Option2 = document.getElementById('Option2');
const Option3 = document.getElementById('Option3');
const Option4 = document.getElementById('Option4');


let answers = 0;   // Number of right answers
let number = 1;   // Keep track of number of questions
let currentQuestion = null;  // Current question 

// Show the first question when the user visits the page
window.onload = () => {
    // fetch the first question 
    fetch('http://localhost:8080/nextQuestion', {
        method: 'POST',
    })
    .then((res) => res.json())    // convert response in json format
    .then((data) => {
        // update the question and the options
        question.innerText = "1. " + data.question;
        Option1.innerText = "a. " + data.options.a;
        Option2.innerText = "b. " + data.options.b;
        Option3.innerText = "c. " + data.options.c;
        Option4.innerText = "d. " + data.options.d;

        // add the data to currentQuestion so that we can access it later
        currentQuestion = data;
    })
    .catch((err) => {
        console.log(err);
    });
}


// –––––––––––––––– Function for Checking answers and fetching next question –––––––––––––––
const checkAnswer = (e) => {
    // check if the answer is correct for current question
    if(currentQuestion && e.target.innerText.substring(0, 1) == currentQuestion.correctAnswer) {
        answers++;  // increment the ans if it's correct
    }

    // fetch the next question 
    fetch('http://localhost:8080/nextQuestion', {
        method: 'POST',
        body: JSON.stringify({ nextQuestionIndex: number }),  // Send the index of question to fetch
        headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => res.json())
    .then((data) => {

        // If Quiz is ended remove all the elements
        if(data.isQuizEnded) {
            question.remove();
            Option1.remove();
            Option2.remove();
            Option3.remove();
            Option4.remove();

            // Create an Score element to display the final score of quiz
            const score = document.createElement('h2');
            score.textContent = `Score: ${answers}/${(number-1)}`;
            parent.appendChild(score);
        }

        // update the question and the options
        if(data.question) {
            question.innerText = number + ". " + data.question;
            Option1.innerText = "a. " + data.options.a;
            Option2.innerText = "b. " + data.options.b;
            Option3.innerText = "c. " + data.options.c;
            Option4.innerText = "d. " + data.options.d;
        }

        // add the data to currentQuestion so that we can access it later
        currentQuestion = data;
    })
    .catch((err) => {
        console.log(err);   // catch the Errors
    });
    number++;
}


// add event listeners
Option1.addEventListener('click', checkAnswer)
Option2.addEventListener('click', checkAnswer)
Option3.addEventListener('click', checkAnswer)
Option4.addEventListener('click', checkAnswer)