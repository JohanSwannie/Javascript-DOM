const modalContainer = document.querySelector(".modal-container");
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");

openButton.addEventListener("click", () => {
  modalContainer.style.display = "block";
  openButton.innerText = "Close the Modal";
});

closeButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
  openButton.innerText = "Open the Modal";
});

window.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = "none";
    openButton.innerText = "Open the Modal";
  }
});
