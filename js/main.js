const header = document.querySelector(".header");
const btn = document.querySelector(".header__hamburger-btn");
const mask = document.querySelector(".header__mask");

btn.addEventListener("click",() => {
    header.classList.toggle("open");
})

mask.addEventListener("click",() => {
    header.classList.remove("open");
})