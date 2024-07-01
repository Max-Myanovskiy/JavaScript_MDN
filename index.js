// Create needed constants
const list = document.querySelector("ul");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");
const form = document.querySelector("form");
const submitBtn = document.querySelector("form button");

// Создайте экземпляр объекта db, где мы сможем хранить открытую базу данных
let db;

window.onload = function () {
  // Открываем нашу базу данных; она создаётся, если её ещё не существует
  // (см onupgradeneeded ниже)
  let request = window.indexedDB.open("notes", 1);

  // обработчик onerror означает, что база данных не открылась успешно
  request.onerror = function () {
    console.log("Database failed to open");
  };

  // обработчик onsuccess означает, что база данных открыта успешно
  request.onsuccess = function () {
    console.log("Database opened successfully");
  };

  // Сохраните открытую базу данных в переменной db. Она будет использована ниже
  db = request.result;

  // Выполните функцию displayData() для отображения тех заметок, которые уже находятся в IDB
  displayData();
};
