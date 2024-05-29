const button = document.querySelector("button");

button.onclick = function () {
  let name = prompt("Как тебя зовут?");
  alert("Привет " + name + ", рады вас видеть !");
};

// list = document.createElement("ul");
// document.body.appendChild(list);
