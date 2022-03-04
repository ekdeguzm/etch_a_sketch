// Create a webpage with 16x16 grid of square divs
// Create a function that lays down 16 divs next to eachother
// then moves onto next line down,
// repeats process until 16 rows are made.
let squareLeft = 20
let squareTop = 20
let z = 0
let numberOfCells

// Create a single square 
function createDivSquare(number) {
    for (let i = 0; i < number * number; i++) {
        z += 1;
        const container = document.querySelector('#container');
        let div = document.createElement("div");
        div.classList.add('square');
        squareLeft += 20
        div.style.left = `${squareLeft}px`;
        div.style.top = `${squareTop}px`;
        container.appendChild(div);
        checkSquareLeft()
    }
}

function checkSquareLeft() {
    if (z % numberOfCells == 0) {
        squareLeft = 20
        squareTop += 20
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        location.reload()
    })
});


// prompt user for number of cells
function promptUser() {
    numberOfCells = prompt("Enter the number of cells you want on each side.")
    numberOfCells = Math.round(numberOfCells);
    numberOfCells = parseInt(numberOfCells)

    if (isNaN(numberOfCells)) {
        alert("Please enter a number")
    }

    if (numberOfCells > 100) {
        numberOfCells = 100
        alert("The max is 100. The number of cells is set to 100")
    }

}


promptUser()
createDivSquare(numberOfCells)

