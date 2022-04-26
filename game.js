const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

/* Creating the Question array*/

let questions = [
    {
        question : 'What is the atomic sign for water on the periodic table ?',
        choice1: 'O2',
        choice2: 'CO2',
        choice3: 'H2O',
        choice4: 'He',
        answer: 3,
        
    },
    {
        question : 'What is the Currency of Sweden ?',
        choice1: 'Euro',
        choice2: 'Pound Sterling',
        choice3: 'Yen',
        choice4: 'Krona',
        answer: 4,
        
    },
    {
        question : 'What is the largest animal in the world ?',
        choice1: 'Giraffe',
        choice2: 'Whale',
        choice3: 'Anaconda',
        choice4: 'Elephant',
        answer: 2,
        
    },
    {
        question : 'What is the longest river in the world ?',
        choice1: 'Nile',
        choice2: 'Mississpi',
        choice3: 'Amazon',
        choice4: 'Yellow River',
        answer: 3,
        
    },
    {
        question : 'Who painted Mona Lisa ?',
        choice1: 'Leonardo de Vinci',
        choice2: 'Michel Angelo',
        choice3: 'Salvador Dali',
        choice4: 'Vincent Van Gogh',
        answer: 3,
        
    }


]

/* creating constants with a fixed value */

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5
