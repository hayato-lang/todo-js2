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

  li.appendChild(p);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
