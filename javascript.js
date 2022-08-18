/*
Create grid
*/

const container = document.querySelector(".container")

//https://stackoverflow.com/a/57550587/

function makeRows(rows, cols) {
    // Add inline style to container
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 16);


/*
Drawing function
*/
const cells  = document.querySelectorAll(".grid-item")

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('mouseover', () => {
    cells[i].style.backgroundColor = 'red'
  });
}

// Alt syntax:
    // cells.forEach(cell => {
    //   console.log(cell)
    //   cell.addEventListener('mouseover', () => cell.style.backgroundColor = 'red')
    // })
