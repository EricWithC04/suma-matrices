const matrixForm = document.getElementById('matrixForm');
const matrixXY = []

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
    for (let i = 0; i < matrixForm.elements['rows'].value; i++) {
        matrixXY.push([])
        for (let j = 0; j < matrixForm.elements['cols'].value; j++) {
            matrixXY[i].push(1)
        }
    }
    console.log(matrixXY);
    createMatrix(
        matrixForm.elements['rows'].value,
        matrixForm.elements['cols'].value
    );
})

