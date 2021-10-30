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
    const addTarget = completeButton.parentNode;
    const addTar = addTarget.parentNode;
    const text = addTar.firstElementChild.innerText;
    addTar.textContent = null;

    const p = document.createElement("p");
    p.className = "todo-title";
    p.innerText = text;
    const incompleteButton = document.createElement("button");
    incompleteButton.innerText = "戻す";
    incompleteButton.addEventListener("click", () => {
      const removeButton = incompleteButton.parentNode;
      document.getElementById('complete-list').removeChild(removeButton);
 
      const text = removeButton.parentNode.firstElementChild.innerText;
      console.log(text);
    });

    addTar.appendChild(p);
    addTar.appendChild(incompleteButton);

    document.getElementById("complete-list").appendChild(addTar);
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
