const items = document.querySelectorAll(".list-item");

items.forEach((item, index) => {
  if ((index + 1) % 2 === 0) {
    item.classList.add("li-properties1");
  } else {
    item.classList.add("li-properties2");
  }
});

// OR

// items.forEach((_, index) => {
//   if ((index + 1) % 2 === 0) {
//     $("li:nth-child(even)").css("background-color", "navy");
//   } else {
//     $("li:nth-child(odd)").css("color", "#000");
//     $("li:nth-child(odd)").css("background-color", "gray");
//   }
// });
