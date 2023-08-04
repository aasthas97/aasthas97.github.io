const gridColor = "rgb(245, 245, 245)";
let drawColor;

const container = document.querySelector("#grid-container");
const colorPicker = document.getElementById("color-picker");
const sizePicker = document.getElementById("size-picker");

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function ChangeSize() {
  gridSize = sizePicker.value;
  Reset(gridSize);
}

function ChangeColour() {
  var foo = hexToRgb(colorPicker.value);
  drawColor = `rgb(${foo.r}, ${foo.g}, ${foo.b})`;
}

function sketch() {
  this.style.backgroundColor = drawColor;
}

function DrawGrid(gridSize) {
  boxSize = 800 / gridSize;
  for (let boxNumber = 0; boxNumber < gridSize ** 2; boxNumber++) {
    let sketchBox = document.createElement("div");
    sketchBox.style.width = boxSize + "px";
    sketchBox.style.height = boxSize + "px";
    sketchBox.setAttribute("class", "sketch-box");
    sketchBox.addEventListener("click", sketch);
    container.appendChild(sketchBox);
  }
}

function Reset(gridSize) {
  container.innerHTML = "";
  container.style.backgroundColor = gridColor;
  colorPicker.value = "#b12292";
  drawColor = "rgb(177, 34, 146)";
  DrawGrid(gridSize);
}

Reset(16);

/// TODO
// 4. Define colors as CSS variables
// 5. Make jS concise
// 6. Draw by click and drag
// 7. Make phone-friendly
