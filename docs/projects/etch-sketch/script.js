const gridColor = "rgb(245, 245, 245)";
let drawColor;

const container = document.querySelector("#grid-container");
const colorPicker = document.getElementById("color-picker");

// Helper function to convert hex to RGB color values
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

// Change size of the drawing grid based on a user-entered input
// Size cannot be less than 10x10 or more than 50x50
function ChangeSize(newSize) {
  if (newSize > 50){
    newSize = 50;
  }
  else if (newSize < 10){
    newSize = 10;
  }

  Reset(newSize);
}

// Change pen color
function ChangeColour(hexColor) {
  console.log(hexColor);
  var foo = hexToRgb(hexColor);
  drawColor = `rgb(${foo.r}, ${foo.g}, ${foo.b})`;
}

function sketch() {
  this.style.backgroundColor = drawColor;
}

// Create drawing board and attach event handlers
function DrawGrid(gridSize) {
  boxSize = 800 / gridSize;
  for (let boxNumber = 0; boxNumber < gridSize ** 2; boxNumber++) {
    let sketchBox = document.createElement("div");
    sketchBox.style.width = boxSize + "px";
    sketchBox.style.height = boxSize + "px";
    sketchBox.setAttribute("class", "sketch-box");
    sketchBox.addEventListener("mousedown", sketch);
    container.appendChild(sketchBox);
  }
}

// Reset grid size and color, redraw the grid
function Reset(gridSize) {
  container.innerHTML = "";
  container.style.backgroundColor = gridColor;
  colorPicker.value = "#b12292";
  drawColor = "rgb(177, 34, 146)";
  DrawGrid(gridSize);
}

Reset(16);