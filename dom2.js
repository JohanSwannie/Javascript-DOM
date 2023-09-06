const items = document.querySelectorAll(".list-item");

items.forEach((_, index) => {
  if ((index + 1) % 2 === 0) {
    $("li:nth-child(even)").css("background-color", "navy");
  } else {
    $("li:nth-child(odd)").css("color", "#000");
    $("li:nth-child(odd)").css("background-color", "gray");
  }
});
