// // 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

// const customName = document.getElementById("customname");
// const randomize = document.querySelector(".randomize");
// const story = document.querySelector(".story");

// function randomValueFromArray(array) {
//   const random = Math.floor(Math.random() * array.length);
//   return array[random];
// }

// // 2. RAW TEXT STRINGS

// var storyText =
//   "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

// var insertY = ["the soup kitchen", "Disneyland", "the White House"];

// var insertZ = [
//   "spontaneously combusted",
//   "melted into a puddle on the sidewalk",
//   "turned into a slug and crawled away",
// ];

// // 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

// randomize.addEventListener("click", result);

// function result() {
//   var newStory = storyText;
//   var xItem = randomValueFromArray(insertX);
//   var yItem = randomValueFromArray(insertY);
//   var zItem = randomValueFromArray(insertZ);
//   //   newStory = newStory.replace(":insertx:", xItem);
//   newStory = newStory.replace(/:insertx:/g, xItem);
//   newStory = newStory.replace(/:inserty:/g, yItem);
//   newStory = newStory.replace(/:insertz:/g, zItem);

//   if (customName.value !== "") {
//     var name = customName.value;
//     newStory = newStory.replace("Bob", name);
//   }

//   if (document.getElementById("uk").checked) {
//     const weight = Math.round(300 * 0.071429) + " stone";
//     const temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";
//     newStory = newStory.replace("300 pounds", weight);
//     newStory = newStory.replace("94 fahrenheit", temperature);
//   }

//   story.textContent = newStory;
//   story.style.visibility = "visible";
// }
// // Пример оператора switch

// var select = document.querySelector("select");
// var para = document.querySelector(".weather");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   var choice = select.value;

//   switch (choice) {
//     case "sunny":
//       para.textContent =
//         "Сегодня хорошо и солнечно. Наденьте шорты! Идите на пляж или в парк, и купите мороженое.";
//       break;
//     case "rainy":
//       para.textContent =
//         "На улице дождь. Возьмите плащ и зонт, и не гуляйте слишком долго";
//       break;
//     case "snowing":
//       para.textContent =
//         "Идёт снег - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.";
//       break;
//     case "overcast":
//       para.textContent =
//         "Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.";
//       break;
//     default:
//       para.textContent = "";
//   }
//   para.style.visibility = "visible";
// }

// // Пример тернарного оператора

// var select = document.querySelector("select");
// var html = document.querySelector("html");
// document.body.style.padding = "10px";

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.onchange = function () {
//   select.value === "black"
//     ? update("black", "white")
//     : update("white", "black");
// };

// Выход из цикла с помощью break

// var contacts = [
//   "Григорий:2232322",
//   "Марина:3453456",
//   "Василий:7654322",
//   "Наталья:9998769",
//   "Диана:9384975",
// ];
// var para = document.querySelector("p");
// var input = document.querySelector("input");
// var btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   var searchName = input.value;
//   input.value = "";
//   input.focus();
//   for (var i = 0; i < contacts.length; i++) {
//     var splitContact = contacts[i].split(":");
//     if (splitContact[0] === searchName) {
//       para.textContent = splitContact[0] + ", тел.: " + splitContact[1] + ".";
//       break;
//     } else {
//       para.textContent = "Контакт не найден.";
//     }
//   }
// });

// Практическое упражнение: запускаем обратный отсчёт!

// var output = document.querySelector(".output");
// output.innerHTML = "";

// var i = 10;

// while (i >= 0) {
//   var para = document.createElement("p");

//   if (i === 10) {
//     para.textContent = "Обратный отсчет: " + i;
//   } else if (i === 0) {
//     para.textContent = "Пуск!";
//   } else {
//     para.textContent = i;
//   }
//   output.appendChild(para);
//   i--;
// }

// Практическое упражнение: Заполнение списка гостей

var people = [
  "Крис",
  "Анна",
  "Колин",
  "Терри",
  "Фил",
  "Лола",
  "Сём",
  "Кай",
  "Брюс",
];

var admitted = document.querySelector(".admitted");
var refused = document.querySelector(".refused");
admitted.textContent = "Пригласить: ";
refused.textContent = "Не приглашать(!): ";

var i = 0;

while (i < people.length) {
  if (people[i] === "Фил" || people[i] === "Лола") {
    refused.textContent += people[i] + ", ";
  } else {
    admitted.textContent += people[i] + ", ";
  }
  i++;
}

refused.textContent = refused.textContent.slice(0, -2) + ".";
admitted.textContent = admitted.textContent.slice(0, -2) + ".";
