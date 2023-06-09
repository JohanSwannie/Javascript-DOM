const h1Array = [
  "Row number 1",
  "Row number 2",
  "Row number 3",
  "Row number 4",
  "Row number 5",
  "Row number 6",
  "Row number 7",
  "Row number 8",
  "Row number 9",
  "Row number 10",
  "Row number 11",
  "Row number 12",
  "Row number 13",
  "Row number 14",
  "Row number 15",
  "Row number 16",
];

const cont = document.querySelector(".container");

const goGetThem = () => {
  let count = 0;

  while (count < h1Array.length) {
    const h3text = document.createElement("h3");
    h3text.setAttribute("class", "bigger");
    h3text.textContent = h1Array[count];
    cont.appendChild(h3text);
    count++;
  }

  document.querySelectorAll(".bigger").forEach((biggy) => {
    biggy.style.color = "rebeccapurple";
  });
};

goGetThem();
