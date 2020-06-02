const typingContainer = document.getElementById("jsTyping");
const typingToken = typingContainer.querySelectorAll(".token__unit");

let index = 0;

function handleTyping(e) {
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
    if (e.key === typingToken[index].innerText) {
      typingToken[index].classList.add("right");
    } else {
      typingToken[index].classList.add("wrong");
    }
    index += 1;
  }
}

function init() {
  document.addEventListener("keydown", handleTyping);
}

if (typingContainer) {
  init();
}
