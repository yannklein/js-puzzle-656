// todo

// ///////
// Rehearsal
// ///////

// 1. Select elements (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");
// 2. Listen to a click on the button
button.addEventListener("click", (event) => {
  console.log(event);
  // 3. Change the DOM, display the hint, add class active
  hint.classList.add("active");
});

// ///////
// Livecode
// ///////

const canItMove = (tile) => {
  // pseudo code
  // 1. select the empty space (with class empty), get its x and y positions
  const emptyTile = document.querySelector(".empty");
  const emptyTileCell = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;
  
  // 2. get the clicked tile from params, get its x and y positions
  const tileCell = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  
  // 3. compare the location of clicked tile and empty space
  // 4. return true if "nearby", flase else
  const cellNearby = Math.abs(emptyTileCell - tileCell);
  const rowNearby = Math.abs(emptyTileRow - tileRow);
  return (cellNearby + rowNearby) === 1;
}

const swipeTile = (tile) => {
  const emptyTile = document.querySelector(".empty");
  tile.classList.add("empty");
  emptyTile.innerText = tile.innerText;
  emptyTile.classList.remove("empty");
  tile.innerText = "";
};

const didWeWin = (tiles) => {
  const result = [];
  tiles.forEach((tile) => {
    result.push(tile.innerText);
  });
  return result.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
}

// 1. Select every td element
const tiles = document.querySelectorAll("td");

// 2. Listen to a click on each td
tiles.forEach((tile) => {
  tile.addEventListener("click", (event) => {
    // console.log(event);
    const clickedTile = event.currentTarget;
    // 3. if tile can be moved
    if (canItMove(clickedTile)) {
      // 4. swipe tile and empty space (class and content)
      swipeTile(clickedTile);
      // 5. check if won! :D
      if(didWeWin(tiles)) {
        setTimeout(() => {
          alert("We won 🤟, I love you!");
        }, 500);
      }
    }
  });
});

// 6. Go home and digest the indian curry (for onsite students)