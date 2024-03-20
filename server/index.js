import express from "express"
const app = express()

app.use(express.json())

app.post("/matrixAddition", (req, res) => {

    const matrix1 = req.body.matrix1
    const matrix2 = req.body.matrix2
    const newMatrix = []

    for (let i = 0; i < matrix1.length; i++) {
        newMatrix.push([])
        for (let j = 0; j < matrix1[i].length; j++) {
            newMatrix[i].push(matrix1[i][j] + matrix2[i][j])
        }
    }

    res.status(200).json(newMatrix)
})

app.listen(3000, () => {
    console.log("Server listen on port 3000");
})
