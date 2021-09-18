const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ path: __dirname + "/.env" });
// const jwt = require("./jwt");


const mongoose = require('mongoose');
const connection = 'mongodb+srv://dbJkt:dbJkt@cluster0.vusuw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(connection,{ useNewUrlParser: true})
  .then(() => console.log("Database Connected Successfully"))
  .catch(err => console.log(err));

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open');
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});



var allowedOrigins = [
  'http://localhost:3000',
  'https://38a4-180-252-161-54.ngrok.io',
  'http://localhost:8080/',
  'https://jktbersinar.herokuapp.com/',
  'https://jakarta-bersinar.000webhostapp.com/'
];

app.use(cors({
  origin: function(origin, callback){
    console.log(origin)
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MODELS
const Users = require("./controllers/user");
const Kasus = require("./controllers/kasusNarkoba");


app.get("/", function(req, res, next) {
  return res.send("Hello Nodejs");
});


app.post("/register",  Users.register)
app.post("/login", Users.login)

app.post("/kasus_narkoba/create", Kasus.new )
app.get("/kasus_narkoba/list", Kasus.list )

const port = process.env.PORT;


app.listen(port, () => {
  console.log("Server is running... on port " + port);
});
