function drawGrid(squares = 16) {
    const grid = document.querySelector("#grid");

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

drawGrid();