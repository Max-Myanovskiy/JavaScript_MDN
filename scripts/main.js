var myInt = 5;
var myFloat = 6.667;
myInt;
myFloat;

10 + 7;
9 * 8;
60 % 3;

var num1 = 10;
var num2 = 50;
9 * num1;
num2 / num1;

5 + 10 * 3;
(num2 % 9) * num1;
num2 + num1 / 8 + 2;

var btn = document.querySelector("button");
var txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}
