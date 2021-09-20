const mongoose = require("mongoose");
const schema = mongoose.Schema({
  alamat: {type: String, default: ""},
  date: {type: String, default: ""},
  file: {type: String, default: ""},
  jumlah_peserta: {type: String, default: ""},
  nama_pic: {type: String, default: ""},
  pemohon_instasi: {type: String, default: ""},
  telp_pic: {type: String, default: ""},
  tempat_pelaksanaan: {type: String, default: ""},
  tgl_pelaksanaan: {type: String, default: ""},
  "ref_number":{type: String, default: ""},
  created: { type: Date, default: Date.now }
});

// schema.index({ username: 1 }, { unique: true });
module.exports = mongoose.model("lmp2mSosialisasi", schema);
