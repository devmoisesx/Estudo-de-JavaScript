const circles = document.querySelectorAll(".circle");
const boxModal = document.querySelector(".box-modal");
const btnOpenModal = document.querySelector(".open-modal");
const counter = document.querySelector(".counter");

// Randomize color and location of circles
circles.forEach((element) => {
  ["mouseover", "click"].forEach((event) => {
    element.addEventListener(event, () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const color = `rgb(${r}, ${g}, ${b})`;
      element.style.backgroundColor = color;
      element.style.top = Math.floor(Math.random() * 100) + "px";
      element.style.left =
        Math.floor(Math.random() * (window.innerWidth - 50 - 185 - 1) + 1) +
        "px";
      console.log(element.style.left);
    });
  });
});

// Open e close Modal
btnOpenModal.addEventListener("click", () => {
  boxModal.classList.add("active");
});

boxModal.addEventListener("click", (e) => {
  if (e.target.matches(".box-modal") || !e.target.closest(".modal")) {
    boxModal.classList.remove("active");
  }
});

// Counter
let count = 0;
document.querySelector(".btn-sub").addEventListener("click", () => {
  count -= 1;
  counter.innerText = count;
});
document.querySelector(".btn-plus").addEventListener("click", () => {
  count += 1;
  counter.innerText = count;
});

// Open and close sidebar menu
document.querySelector(".btn-hamburguer").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("close");
  document.querySelector("main").classList.toggle("menu-closed");
});

// Accordion list
const accordionList = document.querySelectorAll(".list-title");
console.log();

accordionList.forEach((botao) => {
  botao.addEventListener("click", () => {
    botao.classList.toggle("active");
    const painel = botao.nextElementSibling;
    if (painel.style.maxHeight) {
      painel.style.maxHeight = null;
    } else {
      painel.style.maxHeight = painel.scrollHeight + "px";
    }
  });
});

// To-Do
const listElement = document.querySelector(".todo-list");
const inputText = document.querySelector("#text-item");
const addBtn = document.querySelector(".add");

let arr = [];

function renderTodo() {
  listElement.innerText = "";
  console.log(arr);
  arr.forEach((text, index) => {
    let liElement = document.createElement("li");
    let liText = document.createTextNode(text);
    let linkLi = document.createElement("a");
    let linkText = document.createTextNode("Excluir");
    liElement.appendChild(liText);
    linkLi.appendChild(linkText);
    linkLi.setAttribute("href", "#");
    linkLi.setAttribute("onclick", "deleteItem(" + index + ")");
    liElement.appendChild(linkLi);
    listElement.appendChild(liElement);
    console.log(listElement);
  });
}

renderTodo();

addBtn.addEventListener("click", () => {
  if (inputText.value) {
    arr.push(inputText.value);
  }
  return renderTodo();
});

function deleteItem(pos) {
  arr.splice(pos, 1);
  renderTodo();
}
