"use strict";
// Getting elements
let answers = document.getElementsByClassName("answer");
let pluses = document.getElementsByClassName("plus");
let minuses = document.getElementsByClassName("minus");

// when clicked minus it shows plus, when clicked plus it shows minus and answer
for (let i = 0; i < minuses.length; i++) {
  minuses[i].addEventListener("click", () => {
    pluses[i].classList.remove("hide");
    answers[i].classList.add("hide");
    minuses[i].classList.add("hide");
  });
  pluses[i].addEventListener("click", () => {
    answers[i].classList.add("show");
    answers[i].classList.remove("hide");
    pluses[i].classList.add("hide");
    minuses[i].classList.remove("hide");
    minuses[i].classList.add("show");
  });
}
