const mongoose = require("mongoose");
const schema = mongoose.Schema({
  alamat_pasien: {type: String, default: ""},
  alamat_pemohon: {type: String, default: ""},
  approval: {type: Boolean, default: true},
  file: {type: String, default: ""},
  hubungan_pasien: {type: String, default: ""},
  nama_pasien: {type: String, default: ""},
  nama_pemohon: {type: String, default: ""},
  no_kontak_pasien: {type: String, default: ""},
  no_kontak_pemohon: {type: String, default: ""},
  pekerjaan_pasien: {type: String, default: ""},
  pekerjaan_pemohon:{type: String, default: ""},
  "ref_number":{type: String, default: ""},
  created: { type: Date, default: Date.now }
});

// schema.index({ username: 1 }, { unique: true });
module.exports = mongoose.model("rehabilitasi", schema);
