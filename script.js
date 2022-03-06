const container = document.getElementById("container");

function createGrid(number) {
    container.style.setProperty('grid-template-rows', `repeat(${number}, ${(1/number) * 600}px)`);
    container.style.setProperty('grid-template-columns', `repeat(${number}, ${(1/number) * 650}px)`);
    for (let i = 0; i < number * number; i++) {
        const child = document.createElement('div')
        child.style.border = "1px solid black";
        container.appendChild(child);
        child.addEventListener('mouseenter', () => {
            let randomColor = Math.floor(Math.random() * 16777216).toString(16);
            if (document.querySelector('select').value === "random") {
                child.style.backgroundColor = `#${randomColor}`;
            } else if (document.querySelector('select').value === "black") {
                child.style.backgroundColor = "black";
            } else if (document.querySelector('select').value === "erase") {
                child.style.backgroundColor = "white";
            } else if (document.querySelector('select').value === "warm") {
                child.style.backgroundColor = "orange"
                child.style.backgroundColor = "lightcoral"
                child.style.backgroundColor = "yellow"
            }
        
        })

    }
};

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
        location.reload()
    });

const smallButton = document.getElementById('small');

smallButton.addEventListener('click', () => {
    createGrid(10)
});

const mediumButton = document.getElementById('medium');

mediumButton.addEventListener('click', () => {
    createGrid(20)
});

const largeButton = document.getElementById('large');

largeButton.addEventListener('click', () => {
    createGrid(30)
});

createGrid(12)




