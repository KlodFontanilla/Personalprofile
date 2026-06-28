function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

/* Live Clock */
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

/* Typing Effect */
const text = "Welcome to my profile!";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();
