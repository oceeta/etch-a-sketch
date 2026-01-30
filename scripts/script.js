const grid = document.querySelector("#grid");
const changeSquares = document.querySelector("#change-squares");

function drawGrid(squares = 16) {
    // Draw rows
    for (let i = 0; i < squares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.classList.add(`row${i}`);
        grid.appendChild(row);

        // Draw columns
        for (let j = 0; j < squares; j++) {
            const col = document.createElement("div");
            col.classList.add("col");
            col.classList.add(`col${j}`);
            row.appendChild(col);
        }
    }

    // Remove bottom border on last row and right border on last columns
    const lastRow = document.querySelector(`.row${squares - 1}`);
    lastRow.style.borderBottomWidth = "0";

    const lastCols = document.querySelectorAll(`.col${squares - 1}`);
    lastCols.forEach((col) => col.style.borderRightWidth = "0");
}

// "reset" doesn't have to mean "restore to exact original state"
function resetGrid(squares) {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => grid.removeChild(row));
    drawGrid(squares);
}

function getNumberOfSquares() {
    let squares = Number.parseInt(prompt("Enter a number between 1 and 100", ""));
    return squares;
}

grid.addEventListener("mousemove", function(e) {
    if (e.target.classList[0] === "row" || e.target.id === "grid") {
        e.target.style.backgroundColor = "white";
    } else {
        e.target.style.backgroundColor = "black";
    }
});

changeSquares.addEventListener("click", function() {
    let squares = getNumberOfSquares();
    if (squares <= 0 || squares > 100) {
        alert("Invalid input. Please try again.");
    } else {
        resetGrid(squares);
    }
});


drawGrid();