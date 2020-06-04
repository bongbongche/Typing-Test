const typingContainer = document.getElementById("jsTyping");
const typingToken = typingContainer.querySelectorAll(".token__unit");

const speedContainer = document.getElementById("jsSpeed");
const speedTime = speedContainer.querySelector(".speed__time");
const speedWpm = speedContainer.querySelector(".speed__wpm");

let index = 0;
let time = 0;
let wpm = 0;
let pressed = false;

function calculateWpm(totalTime) {
  console.log(totalTime);
  wpm = index / 5 / totalTime / 60;
  speedWpm.innerText = wpm * 100;
}

function setTime() {
  if (pressed === false) {
    setInterval(() => {
      speedTime.innerText = ++time;
      calculateWpm(speedTime.innerText);
    }, 1000);
    pressed = true;
  }
}

function handleTyping(e) {
  setTime();
  if (e.getModifierState(e.key) === true) {
    return;
  } else if (e.key === "Backspace") {
    index === 0
      ? index
      : ((index -= 1), typingToken[index].classList.remove("right", "wrong"));
  } else if (
    typingToken[index].innerText.charCodeAt(0) === 160 &&
    e.keyCode === 32
  ) {
    typingToken[index].classList.add("right");
    index += 1;
  } else {
    e.key === typingToken[index].innerText
      ? typingToken[index].classList.add("right")
      : typingToken[index].classList.add("wrong");
    index += 1;
  }
}

function init() {
  document.addEventListener("keydown", handleTyping);
}

if (typingContainer) {
  init();
}
