let ulClientWidth = 459;
let liAttribute;

const addTheAttribute = () => {
  const liTags = document.querySelectorAll("li");
  const ulTag = document.getElementById("list-items");
  if (liTags.length > 0) {
    const ulWidth = ulClientWidth * 2 + "px";
    ulTag.style.width = ulWidth;
    liTags.forEach((item) => {
      item.setAttribute("class", "list-item");
      liAttribute = item.getAttribute("class");
    });
    const pippie = document.getElementById("pippie");
    pippie.innerHTML = "The attribute for the li tags = " + liAttribute;
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "block";
  }
};

const removeTheAttribute = () => {
  const liTags = document.querySelectorAll("li");
  liTags.forEach((item) => {
    item.removeAttribute("class");
  });
  const pippie = document.getElementById("pippie");
  pippie.innerHTML = "";
  document.getElementById("button2").style.display = "none";
  document.getElementById("button1").style.display = "block";
};
