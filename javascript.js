const container = document.querySelector(".container")

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
      cells[i].style.backgroundColor = 'red'
    });
  }
}
  
// Default rows
rowNum = 16
makeRows(16, 16);
// Initialise draw functionality
initialiseDraw()

const changeResolution = document.querySelector("#resbutton")

/*
Change resolution button
*/
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
  console.log(rowNum)
  initialiseDraw()
})