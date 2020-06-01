const typingContainer = document.getElementById("jsTyping");
const typingToken = typingContainer.querySelectorAll(".token__unit");

let index = 0;

function handleTyping(e) {
  console.log(e.keyCode);
  console.log(typingToken[3].innerText.keyCode);
  console.log(e.key === typingToken[3].innerText);
  if (e.getModifierState(e.key) === true) {
    return;
  } else if (e.key === "Backspace") {
    index === 0
      ? index
      : ((index -= 1), typingToken[index].classList.remove("right", "wrong"));
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
