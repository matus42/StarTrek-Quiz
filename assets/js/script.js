const questions = [
  {
    question: "Who is the captain of the U.S.S. Enterprise-D in 'Star Trek: The Next Generation'?",
    answer: [
      {"text": "Captain James T. Kirk", "correct": false},
      {"text": "Captain Jean-Luc Picard", "correct": true},
      {"text": "Captain Benjamin Sisko", "correct": false},
      {"text": "Captain Jonathan Archer", "correct": false}
    ]
  },
  {
    question: "Which android serves as the second officer on the U.S.S. Enterprise-D?",
    answer: [
      {"text": "Data", "correct": true},
      {"text": "Spock", "correct": false},
      {"text": "Odo", "correct": false},
      {"text": "Tuvok", "correct": false}
    ]
  },
  {
    question: "Who is the ship's counselor?",
    answer: [
      {"text": "Beverly Crusher", "correct": false},
      {"text": "B'Elanna Torres", "correct": false},
      {"text": "Deanna Troi", "correct": true},
      {"text": "Tasha Yar", "correct": false}
    ]
  },
  {
    question: "Which species is known for saying 'Resistance is futile'?",
    answer: [
      {"text": "Klingon", "correct": false},
      {"text": "Ferengi", "correct": false},
      {"text": "Romulan", "correct": false},
      {"text": "Borg", "correct": true}
    ]
  },
  {
    question: "Who is the Klingon officer serving on the U.S.S. Enterprise-D?",
    answer: [
      {"text": "Quark", "correct": false},
      {"text": "Worf", "correct": true},
      {"text": "Chakotay", "correct": false},
      {"text": "Neelix", "correct": false}
    ]
  },
  {
    question: "What is the name of Captain Picard's ready room beverage of choice?",
    answer: [
      {"text": "Iced tea", "correct": false},
      {"text": "Romulan ale", "correct": false},
      {"text": "Saurian brandy", "correct": false},
      {"text": "Earl Grey tea", "correct": true}
    ]
  },
  {
    question: "Which crew member is from the 20th century and was frozen until discovered by the Enterprise?",
    answer: [
      {"text": "Geordi La Forge", "correct": false},
      {"text": "Miles O'Brien", "correct": false},
      {"text": "Wesley Crusher", "correct": false},
      {"text": "Montgomery Scott", "correct": true}
    ]
  },
  {
    question: "What is the name of the Betazoid ambassador and mother of Deanna Troi?",
    answer: [
      {"text": "Kes", "correct": false},
      {"text": "Lwaxana Troi", "correct": true},
      {"text": "K'Ehleyr", "correct": false},
      {"text": "Ro Laren", "correct": false}
    ]
  },
  {
    question: "Who designed the Enterprise-D's warp core?",
    answer: [
      {"text": "Dr. Leah Brahms", "correct": true},
      {"text": "Guinan", "correct": false},
      {"text": "Q", "correct": false},
      {"text": "Dr. Julian Bashir", "correct": false}
    ]
  },
  {
    question: "Which omnipotent being frequently tests and torments the Enterprise crew?",
    answer: [
      {"text": "Sarek", "correct": false},
      {"text": "Gowron", "correct": false},
      {"text": "Q", "correct": true},
      {"text": "Locutus", "correct": false}
    ]
  } 
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const usernameInput = document.getElementById("username");
const welcomeDiv = document.querySelector(".welcome");
const startButton = document.getElementById("start-btn");

let sec = 30;
let time;

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function myTimer(){
  console.log("Timer ticked"); // debugging
  document.getElementById('timer').innerHTML = sec + " sec left";
  sec--;
  if (sec == -1){
    handleTimeOut();
  }
}

function handleTimeOut(){
  clearInterval(time); // Clear the timer

  // Mark the current question as incorrect
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
  });

  nextButton.style.display = "block";
  alert("Time out!! :(");
}

function showQuestion(){
  resetState();
  sec = 30;
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });

  // Reset timer for each question
  clearInterval(time); // Clear any existing timer
  time = setInterval(myTimer, 1000);
}
//removes all the previous answers
function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  clearInterval(time); // Clear the timer when answer is selected
  let selectedBtn = e.target;
  let isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  let username = document.getElementById("username").value;
  resetState();
  questionElement.innerHTML = `${username}, You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})

startButton.addEventListener("click", () => {
  if (!usernameInput.value.trim()) { // Check if username input is empty or just whitespace
      alert("You need to enter a username!");
      return; // Exit the function
  }
  
  // If username is provided, hide the welcome div
  welcomeDiv.style.display = "none";
  
  // Call startQuiz function
  startQuiz();
});



// startQuiz();

