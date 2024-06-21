const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// ====================================================================================

// alice1.animate(aliceTumbling, aliceTiming);
// alice2.animate(aliceTumbling, aliceTiming);
// alice3.animate(aliceTumbling, aliceTiming);

/**
=======================================================================================
This implementation will animate alice1, then alice2, then alice3 in sequence, but with nested promises
=======================================================================================
*/

// function animateElement(element) {
//   return new Promise((resolve) => {
//     element.animate(aliceTumbling, aliceTiming).finished.then(() => resolve());
//   });
// }

// Promise hell version
// animateElement(alice1).then(() => {
//   animateElement(alice2).then(() => {
//     animateElement(alice3).then(() => {
//       console.log("All animations completed");
//     });
//   });
// });

/**
=======================================================================================
The same functionality using a promise chain with different arrow function syntaxes. Here are three variations:
=======================================================================================
*/

// Using full arrow function syntax:

// function animateElement(element) {
//   return new Promise((resolve) => {
//     element.animate(aliceTumbling, aliceTiming).finished.then(() => resolve());
//   });
// }

// animateElement(alice1)
//   .then(() => {
//     return animateElement(alice2);
//   })
//   .then(() => {
//     return animateElement(alice3);
//   })
//   .then(() => {
//     console.log("All animations completed");
//   });

// Using implicit return:

// function animateElement(element) {
//   return new Promise((resolve) => {
//     element.animate(aliceTumbling, aliceTiming).finished.then(() => resolve());
//   });
// }

// animateElement(alice1)
//   .then(() => animateElement(alice2))
//   .then(() => animateElement(alice3))
//   .then(() => console.log("All animations completed"));

// Using method shorthand (since we're just calling a function and returning its result):

// function animateElement(element) {
//   return new Promise((resolve) => {
//     element.animate(aliceTumbling, aliceTiming).finished.then(() => resolve());
//   });
// }

// animateElement(alice1)
//   .then(() => animateElement(alice2))
//   .then(() => animateElement(alice3))
//   .then(console.log.bind(console, "All animations completed"));

// This version maintains the conciseness of the implicit returns, adds error handling with a .catch() block, and leaves room for additional logic after the animations complete.

// function animateElement(element) {
//   return new Promise((resolve) => {
//     element.animate(aliceTumbling, aliceTiming).finished.then(() => resolve());
//   });
// }

// animateElement(alice1)
//   .then(() => animateElement(alice2))
//   .then(() => animateElement(alice3))
//   .then(() => {
//     console.log("All animations completed");
//     // Any additional cleanup or follow-up actions can go here
//   })
//   .catch((error) => {
//     console.error("Animation sequence failed:", error);
//     // Error handling logic goes here
//   });

// ====================================================================================
// Here's an implementation using async and await:
// ====================================================================================

function animateElement(element) {
  return element.animate(aliceTumbling, aliceTiming).finished;
}

async function animateElementsInSequence() {
  //   const aliceA = animateElement(alice1);
  //   const aliceB = animateElement(alice2);
  //   const aliceC = animateElement(alice3);
  try {
    // await aliceA;
    // await aliceB;
    // await aliceC;
    await animateElement(alice1);
    await animateElement(alice2);
    await animateElement(alice3);
    console.log("All animations completed");
  } catch (error) {
    console.error("Animation sequence failed:", error);
  }
}

animateElementsInSequence();
