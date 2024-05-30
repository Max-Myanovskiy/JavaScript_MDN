const string = "Революция не будет транслироваться по телевидению.";
string;

const button = document.querySelector("button");

button.onclick = function () {
  const name = prompt("Как тебя зовут?");
  alert("Привет, " + name + ", рад тебя видеть!");
};
