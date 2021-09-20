const SKPN = require("../models/lm_skpn");

exports.new = async (req, res) => {
  try {
    const id = await SKPN.count() + 1
    const date = req.body.date.replace(/[^\w\s]/gi, '')
    const ref_number = `SKPN/${date}/${`${id}`.padStart(4, '0')}`
    await SKPN.create({
      ...req.body,
      ref_number
    });


    res.json({
      result: "success",
      acknowledge: 1,
      message: `store ${ref_number} successfully`
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
    const data = await SKPN.find();
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

