const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */

const myArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const alts = {
  "pic1.jpg": "Closeup of a human eye",
  "pic2.jpg": "Rock that looks like a wave",
  "pic3.jpg": "Purple and white pansies",
  "pic4.jpg": "Section of wall from a pharoah's tomb",
  "pic5.jpg": "Large moth on a leaf",
};

for (const image of myArray) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${image}`);
  newImage.setAttribute("alt", alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
  const newButtonClass = btn.getAttribute("class");
  if (newButtonClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Светлее";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Темнее";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
