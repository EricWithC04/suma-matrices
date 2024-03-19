const matrixForm = document.getElementById('matrixForm');

const createRows = (num) => {
    const rowContainer = document.getElementsByClassName('containerElements');

    for (let j = 0; j < rowContainer.length; j++) {
        for (let i = 0; i < num; i++) {
            const newRow = document.createElement("div")
            newRow.classList.add("containerRow");
    
            rowContainer[j].appendChild(newRow)
        }
    }
}
const createElements = (num) => {
    const elementsContainer = document.getElementsByClassName('containerRow');

    for (let i = 0; i < elementsContainer.length; i++) {
        for (let j = 0; j < num; j++) {
            const newElement = document.createElement("div")
            newElement.classList.add("element");
            
            elementsContainer[i].appendChild(newElement)
        }
    }
}

const createMatrix = (rows, cols) => {
    createRows(rows);
    createElements(cols);
}

matrixForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createMatrix(
        matrixForm.elements['rows'].value,
        matrixForm.elements['cols'].value
    );
})

