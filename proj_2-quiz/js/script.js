const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];
const gameScreen = document.querySelector('.game');
const resultScreen = document.querySelector('.result');
const question = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const submitAnswerBtn = document.querySelector('.submit-answer');
const playAgainBtn =  document.querySelector('.play-again');
let questionIndex = 0;
let correctAnswersCount = 0;
let wrongAnswersCount= 0;
let selectedAnswer = null;

const showResultPage = () => {
  gameScreen.style.display = 'none';
  resultScreen.style.display = 'grid';
  resultScreen.querySelector('.correct-answers').innerHTML = `Correct answers: ${correctAnswersCount}`
  resultScreen.querySelector('.wrong-answers').innerHTML = `Wrong answers: ${wrongAnswersCount}`
  resultScreen.querySelector('.score').innerHTML = `Score: ${correctAnswersCount * 10}`
}
const showQuestion = (questionNumber) => {
  selectedAnswer = null
  question.textContent = data[questionNumber].question;
  answersContainer.innerHTML = data[questionNumber].answers.map((item, index) => {
    return (`
      <div class="answer">
        <input type="radio" name="variant" id="answer-${index}" value=${item.isCorrect}>
        <label for="answer-${index}">${item.answer}</label>
      </div>
    `)
  }).join('');
}
const selectAnswer = () => {
  answersContainer.querySelectorAll('input').forEach(elem => {
    elem.addEventListener('click', (e) => {
      selectedAnswer = e.target.value;
    })
  })
}
const handleSubmitAnswer = () => {
  submitAnswerBtn.addEventListener('click', () => {
    if(selectedAnswer === null) return;
    selectedAnswer === 'true' ? correctAnswersCount++ : wrongAnswersCount++;
    questionIndex++;
    if(questionIndex >= data.length) return showResultPage();
    showQuestion(questionIndex);
    selectAnswer();
  })
}
const handlePlayAgain = () => {
  questionIndex = 0;
  correctAnswersCount = 0;
  wrongAnswersCount= 0;
  selectedAnswer = null;
  gameScreen.style.display = 'block';
  resultScreen.style.display = 'none';
  showQuestion(0);
  selectAnswer();
}
playAgainBtn.addEventListener('click', handlePlayAgain);
showQuestion(questionIndex)
selectAnswer()
handleSubmitAnswer()






















