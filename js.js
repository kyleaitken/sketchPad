const container = document.querySelector('.container');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

var size;
do {
    size = prompt("Enter a grid size between 4-100 (ie. number of squares per side)");
} while (size < 4 || size > 100);

createGrid(size);
document.getElementById("gridContainer").style.gridTemplateColumns = `repeat(${size}, 1fr)`;

const boxes = document.querySelectorAll('.square');

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        console.log("hovering");
        box.style.cssText = 'background-color: lightblue';
    });
});

