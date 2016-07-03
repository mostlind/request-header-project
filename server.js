var express = require("express")
var app = express()
require("dotenv").config()

var port = process.env.PORT

app.get('/', function (req, res) {
    var ip = req.ip
    var language = req.acceptsLanguages()
    var os = req.get('User-Agent')
    
    var start = os.indexOf('(') + 1
    var end = os.indexOf(')')
    os = os.slice(start, end)
    
    var sendable = {
        "IP Address" : ip,
        "language" : language[0],
        "OS" : os
    }
    
    res.json(sendable)
    
    res.end()
})

var server = app.listen(port, () => {
    console.log("listening on port", port)
})