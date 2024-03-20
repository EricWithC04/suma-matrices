import express from "express"
const app = express()

app.get("/matrixAddition", (req, res) => {
    res.status(200).send("Hello World!")
})

app.listen(3000, () => {
    console.log("Server listen on port 3000");
})
