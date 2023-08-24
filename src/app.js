/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numbers = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]; //14
  let number = document.querySelector("#number");
  let random = getRandom(11);
  let symbol = getSymbol(getRandom(5));
  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");
  if (symbol === "\u2660" || symbol === "\u2663") {
    top.style.color = "black";
    bottom.style.color = "black";
  }
  number.innerHTML = numbers[getRandom(14)];
  top.innerHTML = symbol;
  bottom.innerHTML = symbol;
};
function getRandom(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}
function getSymbol(option) {
  switch (option) {
    case 1:
      let spade = "\u2660";
      return spade;
      break;
    case 2:
      let club = "\u2663";
      return club;
      break;
    case 3:
      let diamond = "\u2666";
      return diamond;
      break;

    case 4:
      let heart = "\u2665";
      return heart;
      break;
  }
}
