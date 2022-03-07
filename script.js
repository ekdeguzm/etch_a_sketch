const container = document.getElementById("container");

function createGrid(number) {
    container.style.setProperty('grid-template-rows', `repeat(${number}, ${(1/number) * 490}px)`);
    container.style.setProperty('grid-template-columns', `repeat(${number}, ${(1/number) * 500}px)`);
    for (let i = 0; i < number * number; i++) {
        const child = document.createElement('div')
        child.style.border = "1px solid black";
        child.style.margin = "0px";
        container.appendChild(child);
        child.addEventListener('mouseenter', () => {
            let randomColor = Math.floor(Math.random() * 16777216).toString(16);
            let warmColorArray = ['#BF6A6D', '#A45256', '#EC6760', '#F88C5D', '#FDCF6D'];
            let warmColor = Math.floor(Math.random() * warmColorArray.length);
            let coldColorArray = ['#5590BC', '#0DABB8', '#01F0F6', '#1FFDE1', '#57FFC8'];
            let coldColor = Math.floor(Math.random() * coldColorArray.length);
            if (document.querySelector('select').value === "random") {
                child.style.backgroundColor = `#${randomColor}`;
            } else if (document.querySelector('select').value === "black") {
                child.style.backgroundColor = "black";
            } else if (document.querySelector('select').value === "erase") {
                child.style.backgroundColor = "white";
            } else if (document.querySelector('select').value === "warm") {
                child.style.backgroundColor = warmColorArray[warmColor];
            } else if (document.querySelector('select').value === "cold") {
                child.style.backgroundColor = coldColorArray[coldColor];
            }
        
        })

    }
};

function clearGrid() {
    document.getElementById('container').textContent = ''
};

const smallButton = document.getElementById('small');

smallButton.addEventListener('click', () => {
    clearGrid()
    createGrid(10)
});

const mediumButton = document.getElementById('medium');

mediumButton.addEventListener('click', () => {
    clearGrid()
    createGrid(20)
});

const largeButton = document.getElementById('large');

largeButton.addEventListener('click', () => {
    clearGrid()
    createGrid(30)
});

createGrid(20)




