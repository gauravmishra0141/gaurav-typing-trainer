const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing is a skill that improves with practice.",
  "Gaurav’s Typing Trainer helps you get faster.",
  "Accuracy is more important than speed.",
  "Practice daily to see improvement."
];

let timer = 0;
let interval = null;
let startTime = null;

function startTest() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteDisplay").innerText = quote;
  document.getElementById("quoteInput").value = "";
  document.getElementById("quoteInput").disabled = false;
  document.getElementById("quoteInput").focus();
  timer = 0;
  document.getElementById("timer").innerText = timer;
  document.getElementById("wpm").innerText = 0;
  document.getElementById("accuracy").innerText = 100;
  clearInterval(interval);
  startTime = new Date();
  interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timer++;
  document.getElementById("timer").innerText = timer;
  calculateStats();
}

document.getElementById("quoteInput").addEventListener("input", calculateStats);

function calculateStats() {
  const quote = document.getElementById("quoteDisplay").innerText;
  const input = document.getElementById("quoteInput").value;
  const wordsTyped = input.trim().split(/\s+/).length;
  const correctChars = [...input].filter((char, i) => char === quote[i]).length;
  const accuracy = Math.round((correctChars / input.length) * 100) || 100;
  const minutes = timer / 60;
  const wpm = Math.round(wordsTyped / minutes) || 0;
  document.getElementById("wpm").innerText = wpm;
  document.getElementById("accuracy").innerText = accuracy;
}
