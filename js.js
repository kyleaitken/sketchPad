const buttons = document.querySelectorAll('.button-container');

function generateColor() {
    const randColor = Math.floor(Math.random()*16777215).toString(16);
    return randColor;
}

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

const container = document.querySelector('.container');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', 'square');
        container.appendChild(square);
    }
    document.getElementById("gridContainer").style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}


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

function colorGraph(newCol) {
    const squares = document.querySelectorAll('#square');
    squares.forEach((sqr) => {
        sqr.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "#" + newCol;
        });
    });
};

