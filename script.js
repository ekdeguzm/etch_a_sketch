// Create a webpage with 16x16 grid of square divs
// Create a function that lays down 16 divs next to eachother
// then moves onto next line down,
// repeats process until 16 rows are made.

let numberOfCells

const container = document.getElementById("container");

function createGrid(number) {
    container.style.setProperty('grid-template-rows', `repeat(${number}, ${(1/number) * 600}px)`);
    container.style.setProperty('grid-template-columns', `repeat(${number}, ${(1/number) * 650}px)`);
    for (let i = 0; i < number * number; i++) {
        const child = document.createElement('div')
        child.style.border = "1px solid black";
        container.appendChild(child);
        child.addEventListener('mouseover', () => {
            let randomColor = Math.floor(Math.random() * 16777216).toString(16);
            if (document.querySelector('select').value === "random") {
                child.style.backgroundColor = `#${randomColor}`;
            } else if (document.querySelector('select').value === "black") {
                child.style.backgroundColor = "black";
            } else if (document.querySelector('select').value === "erase")
                child.style.backgroundColor = "white";
        })
    }

};



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
        promptUser()
    }

    if (numberOfCells > 100) {
        numberOfCells = 100
        alert("The max is 100. The number of cells is set to 100")
    }
    
    if (numberOfCells == '') {
        numberOfCells = 12;
    }
    createGrid(numberOfCells)
}

createGrid(12)
promptUser()




