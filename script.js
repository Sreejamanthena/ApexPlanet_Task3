const questions = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which tag is used for JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: "<script>"
  },
  {
    question: "What does DOM stand for?",
    options: ["Data Object Model", "Document Object Model", "Design Object Mode", "None"],
    answer: "Document Object Model"
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of these"],
    answer: "All of these"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Mozilla", "Netscape", "Google", "Microsoft"],
    answer: "Netscape"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const current = questions[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  nextBtn.disabled = true;
  selectedOption = null;

  current.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => selectOption(li, option);
    optionsEl.appendChild(li);
  });
}

function selectOption(li, optionText) {
  const allOptions = document.querySelectorAll("li");
  allOptions.forEach(opt => opt.classList.remove("selected"));

  li.classList.add("selected");
  selectedOption = optionText;
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz-box").classList.add("hide");
  resultEl.classList.remove("hide");
  scoreEl.textContent = `${score}/${questions.length}`;
}

loadQuestion();
