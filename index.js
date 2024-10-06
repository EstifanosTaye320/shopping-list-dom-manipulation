const input = document.querySelector("input");
const submit = document.querySelector("button");
const ul = document.querySelector("ul");

function createItem(text) {
  const newItem = document.createElement("li");
  const textContent = document.createTextNode(text + "  ");
  const button = document.createElement("button");

  button.onclick = function () {
    ul.removeChild(button.parentElement);
  };
  button.textContent = "Delete";

  newItem.appendChild(textContent);
  newItem.appendChild(button);
  ul.appendChild(newItem);
}

submit.onclick = function () {
  createItem(input.value);
  input.value = "";
  input.focus();
};
