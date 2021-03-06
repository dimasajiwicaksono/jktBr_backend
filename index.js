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
  'https://jktbersinar.herokuapp.com',
  'https://jakarta-bersinar.000webhostapp.com'
];

app.use(cors({
  origin: function(origin, callback){
    // console.log(origin)
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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '1mb'}));

// MODELS
const Users = require("./controllers/user");
const Kasus = require("./controllers/kasusNarkoba");
const Pemberdayaan = require("./controllers/pemberdayaan");
const Pencegahan = require("./controllers/pencegahan");
const Laporan = require("./controllers/laporan");
const Rehabilitasi = require("./controllers/rehabilitasi");
const LMP2mUrine= require("./controllers/lm_p2m_urine");
const LMP2mSosialisasi = require("./controllers/lm_p2m_sosialisasi");
const LMSKPN = require("./controllers/lm_skpn");

app.get("/", function(req, res, next) {
  return res.send("Hello Nodejs");
});

// USER
app.post("/register",  Users.register)
app.post("/login", Users.login)

// KASUS NARKOBA
app.post("/kasus_narkoba/create", Kasus.new )
app.get("/kasus_narkoba/list", Kasus.list )

//PENCEGAHAN
app.post("/pencegahan/create", Pencegahan.new )
app.get("/pencegahan/list", Pencegahan.list )

// PEMBERDAYAAN
app.post("/pemberdayaan/create", Pemberdayaan.new )
app.get("/pemberdayaan/list", Pemberdayaan.list )


// LAPORAN
app.post("/laporan/create", Laporan.new )
app.get("/laporan/list", Laporan.list )

// LAPORAN
app.post("/rehabilitasi/create", Rehabilitasi.new )
app.get("/rehabilitasi/list", Rehabilitasi.list )

//LAYANAN MASYARAKAT
app.post("/lmP2mUrine/create", LMP2mUrine.new )
app.get("/lmP2mUrine/list", LMP2mUrine.list )

// LAYANAN MASYARAKAT
app.post("/lmP2mSosialisasi/create", LMP2mSosialisasi.new )
app.get("/lmP2mSosialisasi/list", LMP2mSosialisasi.list )

// LAYANAN MASYARAKAT
app.post("/lmSKPN/create", LMSKPN.new )
app.get("/lmSKPN/list", LMSKPN.list )




const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is running... on port " + port);
});
