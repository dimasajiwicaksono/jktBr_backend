const SOSIALISASI = require("../models/lm_p2m_sosialisasi");

exports.new = async (req, res) => {
  try {
    const id = await SOSIALISASI.count() + 1
    const date = req.body.date.replace(/[^\w\s]/gi, '')
    const ref_number = `LMSOSIALISASI/${date}/${`${id}`.padStart(4, '0')}`
    await SOSIALISASI.create({
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
    const data = await SOSIALISASI.find();
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

