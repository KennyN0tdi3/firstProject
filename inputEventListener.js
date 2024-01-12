const inputsQuerySelectors = {
    input1: document.querySelector('.input1'),
}

const colorsObjects = {
    black: (event) => event.target.style.background = 'black',
    red: (event) => event.target.style.background = 'red',
    white: (e) => e.target.style.background = 'white',
}

inputsQuerySelectors.input1.addEventListener('input', (event) => {
    if (colorsObjects[event.target.value] !== undefined) {
        colorsObjects[event.target.value](event)
    }
})