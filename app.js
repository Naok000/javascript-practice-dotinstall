"use strict";
const body = document.querySelector("body");
const container = document.querySelector(".container");
const generate = document.querySelector("#generate");
const resetBtn = document.querySelector("#reset");
let num = 3;
let winner = Math.floor(Math.random() * num);

const boxGenerate = (num) => {
  for (let i = 0; i < num; i++) {
    const div = document.createElement("div");
    div.classList.add("box");

    div.addEventListener("click", () => {
      if (i === winner) {
        div.textContent = "Win!";
        div.classList.add("win");
      } else {
        div.textContent = "Lose!";
        div.classList.add("lose");
      }
    });

    container.appendChild(div);
  }
};

const reset = () => {
  num = parseInt(generate.value);
  document.querySelectorAll(".box").forEach((box) => box.remove());
  winner = Math.floor(Math.random() * num);
  boxGenerate(num);
};

// Event Listener
generate.addEventListener("change", reset);
resetBtn.addEventListener("click", reset);

// Load Game
boxGenerate(num);

// const target1 = document.querySelector("#target1");
// const target2 = document.querySelector("#target2");
// const target3 = document.querySelector("#target3");

// target1.addEventListener("click", () => {
//   target1.classList.toggle("circle");
// });
// target2.addEventListener("click", () => {
//   target2.classList.toggle("circle");
// });
// target3.addEventListener("click", () => {
//   target3.classList.toggle("circle");
// });
