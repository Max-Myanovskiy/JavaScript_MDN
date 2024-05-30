const string = "Революция не будет транслироваться по телевидению.";
string;

const button = document.querySelector("button");

button.onclick = function () {
  const name = prompt("Как тебя зовут?");
  alert("Привет, " + name + ", рад тебя видеть!");
};

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `Мне нравится песня ${song}. Я оценил её на ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "Мне нравится песня Fight the Youth. Я оценил её на 90%."

let browserType = "mozilla";
browserType.length;

var list = document.querySelector(".output ul");
list.innerHTML = "";
var greetings = [
  "С днём рождения!",
  "С Рождеством, любовь моя",
  "Счастливого Рождества всей твоей семье",
  "Ты — та, кто нужен мне на Рождество",
  "Поправляйся скорее",
];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Ваше решение должно быть в фигурных скобках
  // ниже: вы должны что-то добавить
  if (greetings[i]) {
    var result = input;
    var listItem = document.createElement("li");
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
