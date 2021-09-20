const mongoose = require("mongoose");
const schema = mongoose.Schema({
  alamat: {type: String, default: ""},
  alamat_pemohon:{type: String, default: ""},
  date: {type: String, default: ""},
  file: {type: String, default: ""},
  keperluan: {type: String, default: ""},
  nama_pemohon: {type: String, default: ""},
  telp_pemohon: {type: String, default: ""},
  tgl_pelaksanaan: {type: String, default: ""},
  ttl: {type: String, default: ""},
  "ref_number":{type: String, default: ""},
  created: { type: Date, default: Date.now }
});

// schema.index({ username: 1 }, { unique: true });
module.exports = mongoose.model("skpn", schema);
