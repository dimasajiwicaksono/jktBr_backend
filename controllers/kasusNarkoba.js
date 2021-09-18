const KasusNarkoba = require("../models/kasus_narkoba");

exports.new = async (req, res) => {
  try {
    await KasusNarkoba.create(req.body);
    res.json({
      result: "success",
      acknowledge: 1,
      message: "store successfully"
    });
  } catch (err) {
    res.json({
      result: "error",
      acknowledge: 0,
      message: err.errmsg
    });
  }
}

exports.list = async (req, res) => {
  try {
    const data = await KasusNarkoba.find();
    res.json({
      result: "success",
      acknowledge: 1,
      message: "get successfully",
      data
    });
  } catch (err) {
    res.json({
      result: "error",
      acknowledge: 0,
      message: err.errmsg
    });
  }
}

