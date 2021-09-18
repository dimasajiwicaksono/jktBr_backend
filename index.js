const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ path: __dirname + "/.env" });
// const jwt = require("./jwt");

require("./db");

var allowedOrigins = ['http://localhost:3000',
  'https://jktbersinar.herokuapp.com/'];
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return res.json({ status: 'error', msg });
    }
    return callback(null, true);
  }
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MODELS
const Users = require("./controllers/user");


app.get("/", function(req, res, next) {
  return res.send("Hello Nodejs");
});


app.post("/register", Users.register)
app.post("/login", Users.login)

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running... on port " + port);
});
