const express = require('express');
const bodyParser = require("body-parser");
const pgDatabase = require('./database/pg.database');
const app = express();
app.use(bodyParser.json());

pgDatabase.connectDB(); // Connect to the database before calling any routes

//Connect trươc khi gọi database
app.use("/v1/auth", require("./app/v1/routes"));

module.exports = app;