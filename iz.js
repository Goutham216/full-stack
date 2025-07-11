const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing speed tests are fun and educational.",
  "Javascript makes dynamic web pages possible.",
  "Practice makes perfect when it comes to typing.",
  "Always write clean and efficient code."
];

let currentSentence = '';
let startTime = null;

const sentenceElement = document.getElementById('sentence');
const input = document.getElementById('input');
const result = document.getElementById('result');
const progress = document.getElementById('progress');


function setSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  currentSentence = sentences[randomIndex];
  sentenceElement.textContent = currentSentence;
}
setSentence();

input.addEventListener('input', () => {
  const typed = input.value;
  
  
  if (!startTime) {
    startTime = new Date();
  }

  if (!currentSentence.startsWith(typed)) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }

  const percent = Math.min((typed.length / currentSentence.length) * 100, 100);
  progress.style.width = percent + '%';

  if (typed === currentSentence) {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // seconds
    const words = typed.trim().split(/\s+/).length;
    const wpm = (words / timeTaken * 60).toFixed(2);
    const accuracy = ((currentSentence.length - countErrors(typed, currentSentence)) / currentSentence.length * 100).toFixed(2);

    result.innerHTML = `
      <p><strong>WPM:</strong> ${wpm}</p>
      <p><strong>Accuracy:</strong> ${accuracy}%</p>
      <p><strong>Time:</strong> ${timeTaken.toFixed(2)}s</p>
    `;

    input.disabled = true;
  }
});

function countErrors(typed, original) {
  let errors = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] !== original[i]) errors++;
  }
  return errors;
}