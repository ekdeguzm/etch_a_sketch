// Create a webpage with 16x16 grid of square divs
// Create a function that lays down 16 divs next to eachother
// then moves onto next line down,
// repeats process until 16 rows are made.
let vw = 0

// Create a single square 
function createDivSquare() {
    for (let i = 0; i < 3; i++) {
        const container = document.querySelector('#container');
        let div = document.createElement("div");
        div.classList.add('square');

        div.style.left += vw;
        container.appendChild(div);
    }
}

createDivSquare()

