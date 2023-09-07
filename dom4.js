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
