const matrixForm = document.getElementById('matrixForm');
const matrixXY = []

const createRows = (arr) => {
    const rowContainer = document.getElementsByClassName('containerElements');

    for (let j = 0; j < rowContainer.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            const newRow = document.createElement("div")
            newRow.classList.add("containerRow");
    
            rowContainer[j].appendChild(newRow)
        }
    }
}
const createElements = (numElements) => {
    const elementsContainer = document.getElementsByClassName('containerRow');

    let secondMatrix = false
    for (let i = 0; i < elementsContainer.length; i++) {
        if (i === Math.ceil(elementsContainer.length / 2)) {
            secondMatrix = true
        }
        for (let j = 0; j < numElements; j++) {
            const newElement = document.createElement("div")
            newElement.classList.add("element");
            if (secondMatrix) {
                newElement.textContent = matrixXY[i - Math.ceil(elementsContainer.length / 2)][j]
            } else {
                newElement.textContent = matrixXY[i][j]
            }
            
            elementsContainer[i].appendChild(newElement)
        }
    }
}

const createMatrix = (arr) => {
    createRows(arr);
    createElements(arr.length);
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
        matrixXY
    );
})

