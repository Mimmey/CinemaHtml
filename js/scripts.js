const schemeSVG = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");

let seatsAmount = 0;
let cost = 800;
let totalPrice = 0;

schemeSVG.addEventListener("click", (event) => {
    if (!event.target.classList.contains("booked") && event.target.classList.contains("seat")) {
        event.target.classList.toggle("active");
        seatsAmount = document.querySelectorAll(".active").length;
        totalPrice = seatsAmount * cost;
        totalPriceTag.textContent = totalPrice;
    }
});

menuButton.addEventListener("click", (event) => {
    menu.classList.toggle("is-open");
});