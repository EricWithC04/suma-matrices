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
const createElements = (numElements, numElements2) => {
    const elementsContainer = document.getElementsByClassName('containerRow');

    for (let i = 0; i < elementsContainer.length / 2; i++) {

        for (let j = 0; j < numElements; j++) {
            const newElement = document.createElement("div")
            newElement.classList.add("element");

            newElement.textContent = matrixXY[i][j]

            newElement.addEventListener("click", () => {
                const nuevoValor = prompt("Ingresa el valor deseado:");

                if (nuevoValor !== null) {
                    newElement.textContent = nuevoValor;

                    matrixXY[i][j] = parseInt(nuevoValor)
                }

                console.log(matrixXY);
            });
            
            elementsContainer[i].appendChild(newElement)
        }
    }

    for (let i = 0; i < elementsContainer.length / 2; i++) {

        for (let j = 0; j < numElements2; j++) {
            const newElement = document.createElement("div")
            newElement.classList.add("element");

            newElement.textContent = matrixXY2[i][j]

            newElement.addEventListener("click", () => {
                const nuevoValor = prompt("Ingresa el valor deseado:");

                if (nuevoValor !== null) {
                    newElement.textContent = nuevoValor;

                    matrixXY2[i][j] = parseInt(nuevoValor)
                }

                console.log(matrixXY2);
            });
            
            elementsContainer[numElements2 + i].appendChild(newElement)
        }
    }
}

const createMatrix = (m1, m2) => {
    createRows(m1);
    createElements(m1.length, m2.length);
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

    createMatrix(matrixXY, matrixXY2);
})

