const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ path: __dirname + "/.env" });
// const jwt = require("./jwt");

const port = process.env.PORT || 8080;
require("./db");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// MODELS
const Users = require("./controllers/user");




app.get("/", function(req, res, next) {
  return res.send("Hello Nodejs");
});


app.post("/register", Users.register)
app.post("/login", Users.login)

app.listen(port, () => {
  console.log("Server is running... on port " + port);
});
