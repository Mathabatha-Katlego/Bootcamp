"Use strict"
const port = 3000,
    express = require("express"),
    //homeController = require("./controllers/homeController"),
    app = express();
    app.get("/", (req, res) => {
      res.send("Hello, Universe!");
      })
      
//app.post("/", (req, res) => {
console.log(req.params);
console.log(req.body);
console.log(req.url);
console.log(req.query);
//res.send("Hello, Universe!");
//})
//app.use((req, res, next) => {
//  console.log(`request made to: ${req.url}`);
//next();
//});
//app.get("/items/:vegetable", (req, res) => {
//let veg = req.params.vegetable;
//res.send(`This is the page for ${veg}`);
//});
//app.use(
  //  express.urlencoded({
    //    extended: false
    //})
//);
//app.use(express.json());
//app.post("/", (req, res) => {
  //  console.log( req.body);
    //console.log(req.query);
    //console.log(req.params);
    //res.send("POST Successful!");
//});
//app.get("/items/:vegetable", homeController.sendReqParam);
app.listen(port, () => {
    console.log(`The Express.js server has started and is listening
➥ on port number: ${port}`);
});