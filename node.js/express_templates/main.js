"use strict";
const express = require("express"),
    homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts"),
    errorController = require("./controllers/errorController"),
    app = express();
app.use(layouts)
app.use(express.static("public"))
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.get("/name/:myName", homeController.respondWithName);
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);
app.listen(app.get("port"), () => {
    console.log(`The Express.js server has started and is listening
    ➥ on port number: ${app.get("port")}`);
});