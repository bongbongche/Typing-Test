const typingContainer = document.getElementById("jsTyping");
const typingToken = typingContainer.querySelectorAll(".token__unit");

const speedContainer = document.getElementById("jsSpeed");
const speedWpm = speedContainer.querySelector(".speed__wpm");

let index = 0;
let pressed = false;

function showWpm(totalTime) {
  const wpm = Math.round(index / 5 / totalTime);
  const wpmText = speedWpm.querySelector("p");
  wpmText.innerText = `WPM: ${wpm}`;
}

function setTime() {
  if (pressed === false) {
    speedContainer.style.opacity = 1;
    const startTime = new Date().getTime();
    setInterval(() => {
      const currentTime = new Date().getTime();
      const typingTime = currentTime - startTime;
      const seconds = Math.floor(typingTime / 1000);
      const minutes = seconds / 60;
      showWpm(minutes);
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
