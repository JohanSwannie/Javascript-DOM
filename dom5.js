const ulElement = document.querySelector("ul");
const liElement = document.querySelector("li");
const subby = document.querySelector(".sub-container");
const html = document.documentElement;
let descr1 = "parent Element of the ul Element is ";
let descr2 = "parent Element of the li Element is ";
let descr3 = "The parent Node 2 levels above the ul Element is ";
let descr4 = "The parent Node 2 levels above the li Element is ";
let descr5 = "The child nodes below the HTML Element are ";
let descr6 = "The child nodes below the ul Element are ";
let descr7 = "The children of the ul Element are ";
let descr8 = `The first child node of the div with class of "sub-container is `;

p1.innerHTML = `${descr1} ${ulElement.parentNode}`;
p2.innerHTML = `${descr1} ${ulElement.parentElement}`;
p3.innerHTML = `${descr2} ${liElement.parentNode}`;
p4.innerHTML = `${descr2} ${liElement.parentElement}`;
p5.innerHTML = `${descr3} ${ulElement.parentNode.parentNode}`;
p6.innerHTML = `${descr4} ${liElement.parentNode.parentNode}`;
p7.innerHTML = `The HTML Document has ${html.childElementCount} children`;

let htmlChildrenNodes = "";

html.childNodes.forEach((child) => {
  htmlChildrenNodes += child;
});
p8.innerHTML = `${descr5} ${htmlChildrenNodes}`;

ulElement.childNodes[1].style.backgroundColor = "crimson";

let ulChildrenNodes = "";

ulElement.childNodes.forEach((child) => {
  ulChildrenNodes += child;
});

p9.innerHTML = `${descr6} ${ulChildrenNodes}`;

let ulChildren = "";

for (let i = 0; i < ulElement.children.length; i++) {
  ulChildren += ulElement.children[i];
}

p10.innerHTML = `${descr7} ${ulChildren}`;

p11.innerHTML = `${descr8} ${subby.firstChild}`;
