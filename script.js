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

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const current = questions[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(option);
    optionsEl.appendChild(li);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestion].answer;
  if (selectedOption === correctAnswer) score++;
  currentQuestion++;
  currentQuestion < questions.length ? loadQuestion() : showResult();
}

function showResult() {
  document.getElementById("quiz-box").classList.add("hide");
  resultEl.classList.add("show");
  scoreEl.textContent = score;
}

nextBtn.addEventListener("click", loadQuestion);
loadQuestion();
