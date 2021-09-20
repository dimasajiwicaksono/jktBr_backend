const LAPORAN = require("../models/laporan");

exports.new = async (req, res) => {
  try {
    const id = await LAPORAN.count() + 1
    const date = req.body.date.replace(/[^\w\s]/gi, '')
    const ref_number = `LP/${date}/${`${id}`.padStart(4, '0')}`
    await LAPORAN.create({
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
    const data = await LAPORAN.find();
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

