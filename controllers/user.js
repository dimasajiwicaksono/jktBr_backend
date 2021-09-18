const Users = require("../models/user_schema");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const axios = require('axios')


exports.register = async (req, res) => {
  try {

      req.body.password = await bcrypt.hash(req.body.password, 8);
    await Users.create(req.body);
    res.json({
      result: "success",
      acknowledge: 1,
      message: "Register successfully"
    });
  } catch (err) {
    res.json({
      result: "error",
      acknowledge: 0,
      message: err.errmsg
    });
  }
}

exports.login = async (req, res) => {
  let doc = await Users.findOne({ username: req.body.username });
  // console.log(doc)
  if (doc) {
    if (bcrypt.compareSync(req.body.password, doc.password)) {
      const payload = {
        id: doc._id,
        username: doc.username
      };

      let token = jwt.sign(payload, "Scap@026056");
      // console.log(token);

      const resRajaAPI= await axios.get("https://x.rajaapi.com/poe")
      const {token: tokenRajaAPI} = resRajaAPI.data
      res
        .status(200)
        .json({
          result: "success",
          acknowledge: 1,
          authorized: true,
          token,
          tokenRajaAPI,
          message: "Login successfully"
      });
    } else {
      // Invalid password
      res
        .status(200)
        .json({
          result: "success",
          acknowledge: 0,
          authorized: false,
          message: "Invalid password",
        });
    }
  } else {
    // Invalid username
    res
      .status(200)
      .json({
        result: "success",
        acknowledge: 0,
        authorized: false,
        message: "Invalid username",
      });
  }
}
