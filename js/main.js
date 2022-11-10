const btnGenerateGrid = document.getElementById("btn_generate_grid");
const grigliaCont = document.querySelector(".griglia-cont");

btnGenerateGrid.addEventListener("click", function () {
    console.log(this);
    grigliaCont.innerHTML = "";
    generateGrid(10);
} );

/**
 * @param {number} numCelle
 */

function generateGrid(numCelle) {
    const totalCell = numCelle * numCelle;
    

    for (let i = 1; i <= totalCell; i++) {
        const newCell = document.createElement("div");

        newCell.classList.add("grid-cell");
        newCell.style.flexBasis = `calc(100% / ${ numCelle })`;
        newCell.style.width = `calc(100% / ${ numCelle })`;

        newCell.innerHTML = i;
    
        grigliaCont.append(newCell);
    }
}








