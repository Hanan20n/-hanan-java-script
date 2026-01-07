/* SELECT ELEMENTS */
let title = document.getElementById("mainTitle");
let paragraph = document.querySelector("#p1");
let infos = document.querySelectorAll(".info");
let list = document.getElementById("myList");
let button = document.getElementById("btn");
let message = document.getElementById("btnMsg");
let output = document.getElementById("output");

/* MODIFY */
title.textContent = "DOM Playground (Using let)";
paragraph.style.color = "red";

/* LOOP */
for (let info of infos) {
  info.style.backgroundColor = "#c5b3ff";
}

/* CREATE */
let newItem = document.createElement("li");
newItem.textContent = "Item D (let)";
list.appendChild(newItem);

/* DELETE (after 4 seconds) */
setTimeout(() => {
  let lastItem = list.lastElementChild;
  list.removeChild(lastItem);
}, 4000);

/* EVENT */
button.addEventListener("click", function () {
  message.textContent = "Button clicked using let ✅";
  message.style.color = "green";

  output.innerHTML += "<p>Button event fired</p>";
});
