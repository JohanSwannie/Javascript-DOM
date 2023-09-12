// Event Delegation allows users to append a single event listener to a parent element
// that adds it to all of its preent and future descendants that match a selector

const progList = document.querySelector(".programming_languages");
const p1 = document.getElementById("p1");

progList.addEventListener("click", (event) => {
  //   p1.innerHTML = `${event.target.getAttribute("id")} is clicked`;
  p1.innerHTML = `${event.target.innerText} is clicked`;
  if (event.target.matches("li")) {
    for (let i = 0; i < progList.children.length; i++) {
      progList.children[i].style.color = "#FFF";
      progList.children[i].style.backgroundColor = "rgb(54, 69, 79)";
    }
    event.target.style.backgroundColor = "lightgreen";
    event.target.style.color = "#000";
  }
});

const pList = [
  "swift",
  "rust",
  "sql",
  "typescript",
  "cobol",
  "scala",
  "fortran",
  "delphi",
  "html",
  "php",
  "java",
  "assembler",
];

const butter = document.getElementById("butter");
const butter2 = document.getElementById("butter2");

butter.addEventListener("click", () => {
  let language;
  if (pList.length > 0) {
    language = pList[Math.floor(Math.random() * pList.length)];
    if (language) {
      let index = pList.findIndex((lang) => lang === language);
      pList.splice(index, 1);
      const newLi = document.createElement("li");
      newLi.innerText = language;
      newLi.setAttribute("id", language);
      progList.appendChild(newLi);
    }
  } else {
    butter.style.display = "none";
    butter2.style.display = "block";
  }
});

document.getElementById("butter2").addEventListener("click", () => {
  location.reload();
});
