const input = document.querySelector(".input");
const pAnswer = document.querySelector(".answer");
const pError = document.querySelector(".error");
const magicBall = document.querySelector(".ball");

const arrayWithAnswers = [
  "sure",
  "yes",
  "no",
  "maybe",
  "ask again later",
  "I don't know",
  "I don't think so",
  "I think so",
  "I don't care",
];

randomAnswer = () => {
  const random = Math.floor(Math.random() * arrayWithAnswers.length);
  return arrayWithAnswers[random];
};

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (input.value === "") {
      pError.style.display = "block";
      pAnswer.style.display = "none";
      pError.textContent = "Please enter a question";

      return;
    } else {
      pAnswer.textContent = "";
      pError.textContent = "";
      magicBall.classList.add("shake-animation");
      setTimeout(() => {
        magicBall.classList.remove("shake-animation");
        const answer = randomAnswer();
        pAnswer.textContent = answer;
        pError.textContent = "";
        pError.style.display = "none";
        pAnswer.style.display = "block";
      }, 1000);
    }
  }
});
