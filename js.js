const button = document.querySelector('.size-button');

button.addEventListener('click', () => {
    console.log("clicked button");
    clear();
    getSize();
    shade();
});

const container = document.querySelector('.container');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', 'square');
        container.appendChild(square);
    }
    document.getElementById("gridContainer").style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

/*
button.addEventListener('click', () => {
    do {
        size = prompt("Choose a grid size between 4-100 (ie. number of squares per side)");
    } while (size < 4 || size > 100);
    createGrid(size);
    document.getElementById("gridContainer").style.gridTemplateColumns = `repeat(${size}, 1fr)`;
});
*/


function clear() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
}

function getSize() {
    var size;
    do {
        size = prompt("Choose a grid size between 4-100");
    } while (size < 4 || size > 100);
    createGrid(size);
}

function shade(){
    const squares = document.querySelectorAll('#square');
    squares.forEach((sqr) => {
        sqr.addEventListener('mouseover', () => {
            sqr.style.cssText = 'background-color: lightblue';
        });
    });
};

/*
const boxes = document.querySelectorAll('.square');
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        console.log("hovering");
        box.style.cssText = 'background-color: lightblue';
    });
});
*/
