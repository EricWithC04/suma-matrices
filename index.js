const matrixForm = document.getElementById('matrixForm');
const matrixXY = []
const matrixXY2 = []

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
        if (i >= Math.ceil(elementsContainer.length / 2)) {
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

            newElement.addEventListener("click", () => {
                const nuevoValor = prompt("Ingresa el valor deseado:");

                if (nuevoValor !== null) {
                    newElement.textContent = nuevoValor;

                    if (secondMatrix) {
                        matrixXY[i - Math.ceil(elementsContainer.length / 2)][j] = parseInt(nuevoValor)
                    } else {
                        matrixXY[i][j] = parseInt(nuevoValor)
                    }
                }

                console.log(matrixXY);
                console.log(matrixXY2);
            });
            
            elementsContainer[i].appendChild(newElement)
        }
        secondMatrix = false
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
        matrixXY2.push([])
        
        for (let j = 0; j < matrixForm.elements['cols'].value; j++) {
            matrixXY[i].push(1)
            matrixXY2[i].push(1)
        }
    }

    createMatrix(matrixXY);
})

