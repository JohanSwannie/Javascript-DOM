window.addEventListener(
  "click",
  () => {
    console.log("WINDOW");
  },
  true
);

document.addEventListener(
  "click",
  () => {
    console.log("DOCUMENT");
  },
  true
);

document.querySelector(".container3").addEventListener(
  "click",
  () => {
    console.log("TOP DIV - CONTAINER3");
  },
  true
);

document.querySelector(".container2").addEventListener(
  "click",
  () => {
    console.log("SECOND DIV - CONTAINER2");
  },
  true
);

let bMsg1 = "";
let bMsg2 = "";
let bMsg3 = "";

let buttonMessage = "";

document.querySelector("button").addEventListener(
  "click",
  (e) => {
    bMsg1 = e;
    bMsg2 = e.target;
    bMsg3 = e.target.innerText;
    console.log(bMsg1 + " - " + bMsg2 + " - " + bMsg3);
  },
  true
);
