const btnGenerateGrid = document.getElementById("btn_generate_grid");
const grigliaCont = document.querySelector(".griglia-cont");

btnGenerateGrid.addEventListener("click", function () {
    console.log(this);


    GenerateGrid(10);
});

/**
 * @param {number} numCelle
 */

function GenerateGrid() {
    const totalCell = math.pow(numCelle, 2);
    gridContainer.innerHTML = "";

    for (let i = 0; i < totalCell; i++) {
        const newCell = document.createElement("div");

        newCell.classList.add("grid-cell");
        newCell.style.flexBasis = `calc(100% / ${ numCelle })`;
        newCell.style.width = `calc(100% / ${ numCelle })`;

        grigliaCont.append(newCell)
    }
}








