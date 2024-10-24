const container = document.querySelector('.container')

let squaresChoice = 44
const containerWidth = 960

const getSquaresChoice = function()

for (let i = 0; i < squaresChoice * squaresChoice; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    const squareSize = containerWidth / squaresChoice
    square.style.width = `${squareSize}px`
    square.style.height = `${squareSize}px`

    container.appendChild(square)

    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'white'
    })
}



