const inputList = document.querySelector(".input-list");
const addList = document.querySelector(".add-list");
const toDoList = document.querySelector(".toDo-list");
const clear = document.querySelector(".clear");

addList.addEventListener("click", function () {
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(inputList.value);

  newLi.appendChild(liContent);

  var remove = toDoList.appendChild(newLi);

  remove.addEventListener("click", function () {
    this.classList.toggle("change");
  });
  clear.addEventListener("click", function () {
    remove.style.display = "none";
  });
});
