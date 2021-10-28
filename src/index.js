import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");
  li.className = "list-row";

  const p = document.createElement("p");
  p.className = "todo-title";
  p.innerText = inputText;

  const div = document.createElement("div");
  div.className = "list-show";

  const completeButton = document.createElement("button");
  completeButton.idName = "add-complete";
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(p);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target.parentNode);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
