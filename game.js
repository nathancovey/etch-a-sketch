const container = document.querySelector('.container')
const button = document.getElementById('button');
const squaresInfo = document.querySelector('.squaresInfo');

button.addEventListener('click', () => {
    squaresChoice = prompt('Enter number between 1 and 100:')
    
    if (!isNaN(squaresChoice) && squaresChoice > 0 && squaresChoice <= 100) {
        createGrid(squaresChoice)
    } else {
        alert('Must be positive number less than 100.')
        squaresChoice = prompt('Enter number between 1 and 100:')
    }
})

function createGrid(squaresChoice) {
    container.innerHTML = '';
    const containerWidth = 960;
    const squareSize = containerWidth / squaresChoice;

    for (let i = 0; i < squaresChoice * squaresChoice; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'white';
        });

        container.appendChild(square);
    }

    squaresInfo.textContent = `Number of squares: ${squaresChoice}`
}

createGrid(50)


