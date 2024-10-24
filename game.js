const container = document.querySelector('.container')
const newSquare = document.createElement('div')

for (let i = 0; i < 16; i++) {
    newSquare.classList.add('square')
    container.appendChild(newSquare)
}






