// Import questions from external module
import { questions } from "./questions.js";

// DOM elements
const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");
const usernameInput = document.querySelector("#username");
const welcomeDiv = document.querySelector(".welcome");
const startButton = document.querySelector("#start-btn");
const modal = document.querySelector("#timeout-modal");
const closeModal = document.querySelector(".modal-close");
const usernameModal = document.querySelector("#username-modal");

let sec = null;
let time = null;
let currentQuestionIndex = 0;
let score = 0;

/** 
 *  Event listener for clicks on window
 */
window.onclick = function (event) {
  if (event.target === modal) {
    closeTimeoutModal();
  } else if (event.target === usernameModal) {
    closeUsernameModal();
  }
};

/**
 * Start the quiz by initializing the game state and showing the first question.
 */
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  if (time === null) {
    sec = 15;
    time = setInterval(myTimer, 1000);
  }
  document.querySelector("#quit-btn").style.display = "none";
}

/**
 * Timer function to display countdown and handle timeouts
 */
function myTimer() {
  document.querySelector('#timer').innerHTML = sec + " sec left";
  sec--;
  if (sec == -1) {
    handleTimeOut();
  }
}

/**
 * Handles the timeout event by displaying the modal and marking incorrect answer
 */
function handleTimeOut() {
  clearInterval(time);
  modal.style.display = "block";
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });
  nextButton.style.display = "block";
}

/**
 * Displays the current question and answer choices.
 */
function showQuestion() {
  resetState();
  sec = 15;
  if (time !== null) {
    clearInterval(time);
  }
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

/**
 * Resets the state by hiding the next button and removing answer buttons.
 */
function resetState() {
  nextButton.style.display = "none";
  document.querySelector("#quit-btn").style.display = "none"
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

/**
 * Handles the selection of an answer, updates the score and disables buttons.
 * @param {Object} e - The event object representing the button click.
 */
function selectAnswer(e) {
  clearInterval(time);
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

/**
 * Displays the user's score and offers an option to play again.
 */
function showScore() {
  let username = document.querySelector("#username").value;
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!
  <p><br><br>Thanks for playing.<br>Hopefully you enjoyed the game, just as you enjoy watching StarTrek.<br><br>Live Long And Prosper!</p>
  `;
  document.querySelector('#timer').innerHTML = `<br>Congratulation ${username}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  document.querySelector("#quit-btn").style.display = "block"
}

/**
 * Handles the next button, progressing through questions or showing the score.
 */
function handleNextButton() {
  if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    return;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

/**
 * Closes the timeout modal and proceeds to the next question or shows the score
 */
function closeTimeoutModal() {
  modal.style.display = "none";
  handleNextButton();
}

/**
 * Event listener for the close button in the timeout modal
 */
closeModal.onclick = function () {
  closeTimeoutModal();
}

/**
 * Event listener for the close button in the timeout modal
 */
const timeoutModalClose = document.querySelector('#timeout-modal .modal-close');
timeoutModalClose.addEventListener('click', () => {
  closeTimeoutModal();
});

/**
 * Closes the username modal.
 */
function closeUsernameModal() {
  const usernameModal = document.querySelector("#username-modal");
  usernameModal.style.display = "none";
}

// Event listener for the close button in the username modal
const usernameModalClose = document.querySelector('#username-modal .modal-close');
usernameModalClose.addEventListener('click', () => {
  closeUsernameModal();
});

/**
 * Event listener for the next button
 */
nextButton.addEventListener("click", () => {
  handleNextButton();
});

/**
 * Event handler for the start button click.
 * If a valid username is provided, starts the quiz; otherwise, displays a modal.
 */
startButton.addEventListener("click", () => {
  if (!usernameInput.value.trim()) {
    document.querySelector("#username-modal").style.display = "block";
    return;
  }
  welcomeDiv.style.display = "none";
  usernameModal.style.display = "none";
  startQuiz();
});

/**
 * Event handler for the quit button click.
 * Resets the game state, clears the username input, displays the welcome div, and resets the answer buttons.
 */
const quitButton = document.querySelector("#quit-btn");
quitButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  usernameInput.value = '';
  welcomeDiv.style.display = "block";
  resetState();
});

