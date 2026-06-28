function toggleMode() {
    document.body.classList.toggle("dark");
}

setInterval(() => {
    document.getElementById("clock").innerHTML =
        new Date().toLocaleTimeString();
}, 1000);

const text = "Welcome to My Personal Profile!";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
type();
