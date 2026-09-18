const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.get("/khiem", (req, res) => {
    console.log("Client doing call a api");
    res.send('Hello World! and today i promise with myself that i will do my best to learn and practice more and more');
});

module.exports = app;