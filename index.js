const createRows = (num) => {
    const rowContainer = document.getElementById('rContainer');
    
    for (let i = 0; i < num; i++) {
        const newRow = document.createElement("div")
        newRow.classList.add("containerRow");

        rowContainer.appendChild(newRow)
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

createMatrix(3, 3);

