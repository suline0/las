const nav = document.querySelector("#nav");
const menu = document.querySelector("#menu");
const exit = document.querySelector("#exit");

menu.addEventListener("click", () => {
    nav.classList.add("visible");
})

exit.addEventListener("click", () => {
    nav.classList.remove("visible");
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const buttons = document.querySelectorAll(".button");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        buttons.forEach(button => {
            button.classList.add("scrolled");
        });
    } else {
        buttons.forEach(button => {
            button.classList.remove("scrolled");
        });
    }
});



