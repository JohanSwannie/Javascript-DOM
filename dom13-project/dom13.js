const inputTask = document.getElementById("input-task");
const addTask = document.getElementById("add-task");
const taskContainer = document.querySelector(".task-container");

addTask.addEventListener("click", () => {
  let divTask = document.createElement("div");
  divTask.classList.add("taskList");

  let liElement = document.createElement("li");
  liElement.innerText = `${inputTask.value}`;
  divTask.appendChild(liElement);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  checkButton.classList.add("checkTask");
  divTask.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("deleteTask");
  divTask.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please enter a new task");
  } else {
    taskContainer.appendChild(divTask);
  }

  inputTask.value = "";

  checkButton.addEventListener("click", () => {
    if (checkButton.parentElement.style.textDecoration === "line-through") {
      checkButton.parentElement.style.textDecoration = "none";
    } else {
      checkButton.parentElement.style.textDecoration = "line-through";
    }
  });

  deleteButton.addEventListener("click", (event) => {
    let target = event.target;
    target.parentElement.parentElement.remove();
  });
});
