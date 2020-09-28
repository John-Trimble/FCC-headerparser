const express = require('express')
require('dotenv')

const app = express()

app.use(express.static(__dirname + "public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/README.md")
})

app.get("/api/whoami", (req, res) => {
    res.send({ip: req.headers['x-forwarded-for'] || req.connection.remocteAddress})
})

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("App is avaliable at localhost:" + listener.address().port)
})