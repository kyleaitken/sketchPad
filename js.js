// This script creates a grid/canvas to act as a sketch pad in response to mouse-over

const buttons = document.querySelectorAll('.button-container');
const container = document.querySelector('.container');


// generateColor() generates a random color as a hex value equivalent

function generateColor() {
    const randColor = Math.floor(Math.random()*16777215).toString(16);
    return randColor;
}


// Adding click listeners to the new-grid and colorful-mode buttons. 
//   Clears previous grid, prompts user for input re: grid size, and 
//   enables shading of squares in grid

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let target = e.target;
        console.log("clicked button");

        if (target.id === 'size-button') {
            clear();
            getSize();
            shade();
        } else if (target.id === 'color-button') {
            clear();
            getSize();
            let newColor = generateColor();
            colorGraph(newColor);
        };
    });
});


// createGrid(size) creates a new grid of the specified size

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', 'square');
        container.appendChild(square);
    }
    document.getElementById("gridContainer").style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}


// clear() clears the grid of previous squares

function clear() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
}


// getSize() prompts the user for grid size
//    requires: user input must be an integer between 4 and 100

function getSize() {
    var size;
    do {
        size = prompt("Choose a grid size between 4-100");
    } while (size < 4 || size > 100);
    createGrid(size);
}


// shade() creates a listener on each square of the grid and changes
//    color when mouseover occurs. Color only changes once. 

function shade(){
    const squares = document.querySelectorAll('#square');
    squares.forEach((sqr) => {
        sqr.addEventListener('mouseover', () => {
            sqr.style.cssText = 'background-color: black';
        });
    });
};


// colorGraph(newCol) shades the graph using the randomly generated color 

function colorGraph(newCol) {
    const squares = document.querySelectorAll('#square');
    squares.forEach((sqr) => {
        sqr.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "#" + newCol;
        });
    });
};

