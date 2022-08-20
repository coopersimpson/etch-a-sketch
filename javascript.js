const container = document.querySelector(".container")

function randomColor() {
  return '#' + (Math.floor(Math.random()*16777215).toString(16))
}

/*
Create grid function -> /https://stackoverflow.com/a/57550587/
*/
function makeRows(rows, cols) {
    // Add inline style to container
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      // cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };

/*
Drawing function
*/
function initialiseDraw() {
  const cells  = document.querySelectorAll(".grid-item")

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', () => {
      cells[i].style.backgroundColor = 'black'
    });
  }
}

/*
Rainbow draw
*/
function rainbowDraw() {
  const cells  = document.querySelectorAll(".grid-item")

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', () => {
      cells[i].style.backgroundColor = randomColor()
    });
  }
}

/*
Eraser
*/
function eraserDraw() {
  const cells  = document.querySelectorAll(".grid-item")

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', () => {
      cells[i].style.backgroundColor = 'white'
    });
  }
}

/*
Pick color
*/
function pickColorDraw(color) {
  const cells  = document.querySelectorAll(".grid-item")

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', () => {
      cells[i].style.backgroundColor = color
    });
  }
}

// Default rows
rowNum = 16
makeRows(16, 16);
// Initialise draw functionality
initialiseDraw()

/*
Change resolution button
*/
const changeResolution = document.querySelector("#resbutton")

changeResolution.addEventListener('click', () => {
  // Input res
  res = prompt('Enter desired resolution of grid. (a number between 2 and 100)')

  // Restrict bounds
  if (res >= 2 && res <= 100) {
    // Delete current grid
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }
    // Create grid
    rowNum = res
    makeRows(res, res)
    // Reset draw functionality
    initialiseDraw()
    colorPick.value = '#000000'
  }
  else {
    alert('Please enter a number between 2 and 100 inclusive.')
  }
})

/*
Reset button
*/
const resetButton = document.querySelector("#resetbutton")

resetButton.addEventListener('click', () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
  makeRows(rowNum, rowNum)
  initialiseDraw()
  colorPick.value = '#000000'
})

/*
Rainbow button
*/
const rainbowButton = document.querySelector("#rainbow")

rainbowButton.addEventListener('click', () => {
  rainbowDraw()
})

/*
Eraser button
*/
const eraserButton = document.querySelector("#eraser")

eraserButton.addEventListener('click', () => {
  eraserDraw()
  colorPick.value = '#FFFFFF'
})

/*
Color picker
*/
const colorPicker = document.querySelector("#colorpicker")
let colorPick = document.getElementById("colorpicker")

addEventListener('input', (event) => {
  pickColorDraw(colorPick.value)
});