var express = require("express")



var app = express()
var port = process.env.PORT || 3002



app.get("/", function (req, res, next) {

    res.status(200).sendFile(__dirname + "/Lucy/test.html")
})

app.listen(port, function () {
    console.log("== Server is listening on port", port)
})