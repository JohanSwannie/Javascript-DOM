const revealButton = document.querySelector(".reveal-button");
const hiddenContent = document.querySelector(".hidden-content");

const revealContent = () => {
  if (hiddenContent.classList.contains("reveal-content")) {
    hiddenContent.classList.remove("reveal-content");
    revealButton.innerHTML = "Reveal Text";
  } else {
    hiddenContent.classList.add("reveal-content");
    revealButton.innerHTML = "Hide Text";
  }
};

revealButton.addEventListener("click", revealContent);
