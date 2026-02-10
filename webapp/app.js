const form = document.getElementById("predict-form");
const scoreValue = document.getElementById("score");
const scoreCaption = document.getElementById("score-caption");

const coefficients = {
  intercept: -0.5,
  female: 1.2,
  age: -0.03,
  pclass1: 0.8,
  pclass2: 0.4,
  fare: 0.02,
  sibsp: -0.1,
  parch: -0.08,
};

function sigmoid(value) {
  return 1 / (1 + Math.exp(-value));
}

function computeScore() {
  const sex = document.getElementById("sex").value;
  const age = Number(document.getElementById("age").value || 0);
  const pclass = Number(document.getElementById("pclass").value || 3);
  const fare = Number(document.getElementById("fare").value || 0);
  const sibsp = Number(document.getElementById("sibsp").value || 0);
  const parch = Number(document.getElementById("parch").value || 0);

  let score = coefficients.intercept;
  if (sex === "female") {
    score += coefficients.female;
  }
  score += coefficients.age * age;
  score += coefficients.fare * Math.log1p(fare);
  score += coefficients.sibsp * sibsp;
  score += coefficients.parch * parch;

  if (pclass === 1) {
    score += coefficients.pclass1;
  } else if (pclass === 2) {
    score += coefficients.pclass2;
  }

  const probability = sigmoid(score);
  const percent = (probability * 100).toFixed(2);
  scoreValue.textContent = percent;

  let caption = "平均的なスコアです";
  if (probability > 0.7) {
    caption = "生存確率が高めのシナリオ";
  } else if (probability < 0.3) {
    caption = "生存確率が低めのシナリオ";
  }
  scoreCaption.textContent = caption;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  computeScore();
});

computeScore();
