const typingContainer = document.getElementById("jsTyping");
const typingToken = typingContainer.querySelector(".token__unit");

function handleTyping(e) {
  if (e.key === typingToken.innerText) {
    typingToken.classList.add("right");
  } else {
    typingToken.classList.add("wrong");
  }
}

function init() {
  document.addEventListener("keydown", handleTyping);
}

if (typingContainer) {
  init();
}
