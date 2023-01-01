const container = document.querySelector('.container');

// create 16 boxes/squares
for (int i=0; i < 16; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}
