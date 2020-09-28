const express = require('express')
require('dotenv')

const app = express()

app.use(express.static(__dirname + "public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/README.md")
})

app.get("/api/whoami", (req, res) => {
  console.log(req.headers)
    res.send({ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress, language: req.headers['accept-language'], software: req.headers['user-agent']})
})

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("App is avaliable at localhost:" + listener.address().port)
})
