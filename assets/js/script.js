import { questions } from "./questions.js";
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const usernameInput = document.getElementById("username");
const welcomeDiv = document.querySelector(".welcome");
const startButton = document.getElementById("start-btn");

const modal = document.getElementById("timeout-modal");
const closeModal = document.querySelector(".modal-close");
const usernameModal = document.getElementById("username-modal");

let sec = null;
let time = null;

let currentQuestionIndex = 0;
let score = 0;

window.onclick = function (event) {
  if (event.target === modal) {
    closeTimeoutModal();
  } else if (event.target === usernameModal) {
    closeUsernameModal();
  }
};

// Function to close the modal
function closeTimeoutModal() {
  modal.style.display = "none";
  handleNextButton(); // Move to the next question or show score
}

// When the user clicks the close button, close the modal
closeModal.onclick = function () {
  closeTimeoutModal();
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function myTimer() {
  document.getElementById('timer').innerHTML = sec + " sec left";
  sec--;
  if (sec == -1) {
    handleTimeOut();
  }
}

function handleTimeOut() {
  clearInterval(time); // Clear the timer
  modal.style.display = "block";
  // Mark the current question as incorrect
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });
  nextButton.style.display = "block";
}

function showQuestion() {
  resetState();
  sec = 15;
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
  time = setInterval(myTimer, 1000);
}
//removes all the previous answers
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  clearInterval(time); // stop the timer when answer is selected
  let selectedBtn = e.target;
  let isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  let username = document.getElementById("username").value;
  resetState();
  questionElement.innerHTML = `${username}, You scored ${score} out of ${questions.length}!`;
  document.getElementById('timer').innerHTML = "Congratulation!";
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

const timeoutModalClose = document.querySelector('#timeout-modal .modal-close');
timeoutModalClose.addEventListener('click', () => {
  closeTimeoutModal();
});



// Function to close the username modal
function closeUsernameModal() {
  const usernameModal = document.getElementById("username-modal");
  usernameModal.style.display = "none";
}

// Add event listener to username-modal's close button
const usernameModalClose = document.querySelector('#username-modal .modal-close');
usernameModalClose.addEventListener('click', () => {
  closeUsernameModal();
});




nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
})

startButton.addEventListener("click", () => {
  if (!usernameInput.value.trim()) { // Check if username input is empty or just whitespace
    document.getElementById("username-modal").style.display = "block";
    return; // Exit the function
  }

  // If username is provided, hide the welcome div
  welcomeDiv.style.display = "none";
  usernameModal.style.display = "none";
  // Call startQuiz function
  startQuiz();
});


