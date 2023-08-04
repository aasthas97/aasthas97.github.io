const container = document.querySelector("#grid-container");
var chosenColor = "rgb(177, 34, 146)";

function changeColor() {
  this.style.backgroundColor =
    this.style.backgroundColor == chosenColor ? "whitesmoke" : chosenColor;
}

for (let boxNumber = 0; boxNumber < 256; boxNumber++) {
  let sketchBox = document.createElement("div");
  sketchBox.setAttribute("class", "sketch-box");
  sketchBox.addEventListener("click", changeColor);
  container.appendChild(sketchBox);
}

/// TODO
// 1. Add grid size selector
// 2. Add color selector
// 3. Clear all/reset option
// 4. Define colors as CSS variables
