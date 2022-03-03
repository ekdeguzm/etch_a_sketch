// Create a webpage with 16x16 grid of square divs
// Create a function that lays down 16 divs next to eachother
// then moves onto next line down,
// repeats process until 16 rows are made.
let squareLeft = 20
let squareTop = 20
let z = 0

// Create a single square 
function createDivSquare() {
    for (let i = 0; i < 256; i++) {
        z += 1;
        const container = document.querySelector('#container');
        let div = document.createElement("div");
        div.classList.add('square');
        squareLeft += 20
        div.style.left = squareLeft;
        div.style.top = squareTop
        container.appendChild(div);
        checkSquareLeft()
    }
}

function checkSquareLeft() {
    if (z % 16 == 0) {
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



createDivSquare()