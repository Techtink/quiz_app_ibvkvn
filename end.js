const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");

console.log("mostRecentScore => ", mostRecentScore);

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log("highScores => ", highScores);

const MAX_HIGH_SCORES = 5;

finalScore.innerHTML = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

const saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);

  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  console.log("HIGH SCORES => ", highScores);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};
