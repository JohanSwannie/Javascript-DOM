// Event Delegation allows users to append a single event listener to a parent element
// that adds it to all of its preent and future descendants that match a selector

const pl = document.querySelector(".programming_languages");
const p1 = document.getElementById("p1");

pl.addEventListener("click", (event) => {
  p1.innerHTML = `${event.target.getAttribute("id")} is clicked`;
  if (event.target.matches("li")) {
    for (let i = 0; i < pl.children.length; i++) {
      pl.children[i].style.color = "#FFF";
      pl.children[i].style.backgroundColor = "rgb(54, 69, 79)";
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
  let searchOn = true;
  let language;
  while (searchOn) {
    if (pList.length > 0) {
      language = pList[Math.floor(Math.random() * pList.length)];
      if (language) {
        let index = pList.findIndex((lang) => lang === language);
        pList.splice(index, 1);
        const newLi = document.createElement("li");
        newLi.innerText = language;
        newLi.setAttribute("id", language);
        pl.appendChild(newLi);
        searchOn = false;
      }
    } else {
      butter.style.display = "none";
      butter2.style.display = "block";
      searchOn = false;
    }
  }
});

document.getElementById("butter2").addEventListener("click", () => {
  location.reload();
});
