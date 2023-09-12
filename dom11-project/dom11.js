const products = document.getElementsByClassName("container");

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
