const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


let darkMode = false;

themeBtn.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
});
let isOpen = false;

menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
        navLinks.classList.add("show");
    } else {
        navLinks.classList.remove("show");
    }
});