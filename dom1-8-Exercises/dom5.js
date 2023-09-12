const ulElement = document.querySelector("ul");
const liElement = document.querySelector("li");
const subby = document.querySelector(".sub-container");
const html = document.documentElement;
let description = [
  "parent Element of the ul Element is ",
  "parent Element of the li Element is ",
  "The parent Node 2 levels above the ul Element is ",
  "The parent Node 2 levels above the li Element is ",
  "The child nodes below the HTML Element are ",
  "The child nodes below the ul Element are ",
  "The children of the ul Element are ",
  "The first child node of the div with class of sub-container is ",
  "The first child element of the ul element is ",
  "The previous sibling node of the ul element is ",
  "The next sibling node of the ul element is ",
  "The previous sibling element of the ul element is ",
  "The next sibling element of the ul element is ",
];

p1.innerHTML = `${description[0]} ${ulElement.parentNode}`;
p2.innerHTML = `${description[0]} ${ulElement.parentElement}`;
p3.innerHTML = `${description[1]} ${liElement.parentNode}`;
p4.innerHTML = `${description[1]} ${liElement.parentElement}`;
p5.innerHTML = `${description[2]} ${ulElement.parentNode.parentNode}`;
p6.innerHTML = `${description[3]} ${liElement.parentNode.parentNode}`;
p7.innerHTML = `The HTML Document has ${html.childElementCount} children`;

let htmlChildrenNodes = "";

html.childNodes.forEach((child) => {
  htmlChildrenNodes += child;
});
p8.innerHTML = `${description[4]} ${htmlChildrenNodes}`;

ulElement.childNodes[1].style.backgroundColor = "crimson";

ulElement.childNodes[1].addEventListener("click", () => {
  ulElement.childNodes[1].style.backgroundColor = "yellow"; // CHECK THIS OUT
  ulElement.childNodes[3].style.backgroundColor = "crimson";
});

ulElement.childNodes[3].addEventListener("click", () => {
  ulElement.childNodes[3].style.backgroundColor = "yellow";
  ulElement.childNodes[1].style.backgroundColor = "crimson";
});

let ulChildrenNodes = "";

ulElement.childNodes.forEach((child) => {
  ulChildrenNodes += child;
});

p9.innerHTML = `${description[5]} ${ulChildrenNodes}`;

let ulChildren = "";

for (let i = 0; i < ulElement.children.length; i++) {
  ulChildren += ulElement.children[i];
}

p10.innerHTML = `${description[6]} ${ulChildren}`;

p11.innerHTML = `${description[7]} ${subby.firstChild}`;

const body = document.querySelector("body");

document.addEventListener("click", () => {
  body.classList.toggle("bodyColor");
});

let ul = document.querySelector("ul");

p12.innerHTML = `${description[8]} ${ulElement.firstElementChild}`;

p13.innerHTML = `${description[9]} ${ulElement.previousSibling}`;

p14.innerHTML = `${description[10]} ${ulElement.nextSibling}`;

p15.innerHTML = `${description[11]} ${ulElement.previousElementSibling}`;

p16.innerHTML = `${description[12]} ${ulElement.nextElementSibling}`;
