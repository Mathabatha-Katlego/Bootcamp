"use strict";

const port = 3000;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("Params" + req.params);
    console.log("body" + req.body);
    console.log("url" + req.url);
    console.log("Query" + req.query);
    res.send("Hello, Universe!");
});

app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});
