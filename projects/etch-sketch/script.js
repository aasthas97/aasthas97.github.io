const container = document.querySelector("#grid-container");
var invert = true;

for (let row = 0; row < 16; row++) {
  let row_div = document.createElement("div");
  row_div.setAttribute("class", "sketch-row");

  for (let col = 0; col < 16; col++) {
    let col_div = document.createElement("div");
    col_div.setAttribute("class", "sketch-col");

    // set color
    if ((col % 2 == 0 && row % 2 == 0) | (col % 2 != 0 && row % 2 != 0)) {
      col_div.style.backgroundColor = "white";
    } else {
      col_div.style.backgroundColor = "pink";
    }

    row_div.appendChild(col_div);
  }
  container.appendChild(row_div);
}
