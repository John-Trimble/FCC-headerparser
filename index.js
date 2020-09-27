const express = require('express')
require('dotenv')

const app = express()

app.use(express.static(__dirname + "public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/README.md")
})

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("App is avaliable at localhost:" + listener.address().port)
})