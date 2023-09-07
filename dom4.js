const addClassListItems = () => {
  const li = document.querySelectorAll(".initLi");
  li.forEach((item) => {
    item.classList.add("liClass");
  });
};

const toggleClassUnorderedList = () => {
  const ul = document.querySelector(".initUl");
  ul.classList.toggle("ulClass");
};

const removeClassListItems = () => {
  const li = document.querySelectorAll(".initLi");
  li.forEach((item) => {
    item.classList.remove("liClass");
  });
};

const butter1 = document.getElementById("button1");
const butter2 = document.getElementById("button2");
const butter3 = document.getElementById("button3");
const butter4 = document.getElementById("button4");
const butter5 = document.getElementById("button5");

const removeCompleteList = () => {
  const li = document.querySelectorAll(".initLi");
  li.forEach((item) => {
    item.remove();
  });
  butter1.disabled = true;
  butter2.disabled = true;
  butter3.disabled = true;
  butter1.style.color = "blue";
  butter2.style.color = "blue";
  butter3.style.color = "blue";
  butter4.style.display = "none";
  butter5.style.display = "block";
};

const liDescription = ["Mercedes", "Audi", "Volkswagen", "Ford"];

const addCompleteList = () => {
  const ul = document.querySelector(".initUl");
  for (let i = 0; i < 4; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "initLi");
    li.innerHTML = liDescription[i];
    ul.appendChild(li);
  }
  butter1.disabled = false;
  butter2.disabled = false;
  butter3.disabled = false;
  butter1.style.color = "#FFF";
  butter2.style.color = "#FFF";
  butter3.style.color = "#FFF";
  butter4.style.display = "block";
  butter5.style.display = "none";
};
