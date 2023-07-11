var par = document.getElementById("messageParagraph")
var squares = document.querySelectorAll(".square")
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", lightUp)
  }
function intialize () {
  for (var i = 0; i < 25; i++) {
var randomClick = Math.floor(Math.random() * squares.length);
    toggleNeighbors(squares[randomClick]);
  }
}

intialize()

function lightUp () {
  toggleNeighbors(this)
}
function toggleNeighbors (square) {
  var squareToLeft = getNeighbor(square, -1, 0) 
  var squareToRight = getNeighbor(square, 1, 0) 
  var squareAbove = getNeighbor(square, 0, -1) 
  var squareBelow = getNeighbor(square, 0, 1) 
  
  square.classList.toggle(`on`)

  if (squareToLeft != null) {
    squareToLeft.classList.toggle(`on`)
  }
    
  if (squareToRight != null) {
    squareToRight.classList.toggle(`on`)
  }

  if (squareAbove != null) {
    squareAbove.classList.toggle(`on`)
  }

  if (squareBelow != null) {
    squareBelow.classList.toggle(`on`)
  }
  checkWon()
}


function getNeighbor (square, xDiff, yDiff) {
   // array of rows
  let rows = document.getElementsByClassName(`row`)

  let row = square.parentElement // row of square
  let y // y coordinate of square, set below
  let x // x coordinate of square, set below

  // loop through rows to determine y
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] == row) {
      y = i // found matching row, so set y
    }
  }

  // loop through squares in row to determine x
  for (let i = 0; i < row.children.length; i++) {
    if (row.children[i] == square) {
      x = i // found matching square, so set x
    }
  }

  // row of neighbor square
  let neighborRow = rows[y + yDiff]
  square.classList.toggle("on")
  if (neighborRow == null) {
    // row is beyond edge, so no neighbor square
    return null
  }
  else {
    // if x + xDiff is beyond edge, will be null
    return neighborRow.children[x + xDiff]
  }
  
  
}
function checkWon () {
  var  lightsOut = true
  for (var i = 0; i < squares.length; i++) {
  if (squares[i].classList.contains("on")) {
      lightsOut = false
   }
  }

  if (lightsOut == true) {
 par.innerHTML = "Congrats You Solved it"
 for (var i = 0; i < squares.length; i++) {
    squares[i].removeEventListener(click, "lightUp");
 }
 
 console.log("win")
  }
}