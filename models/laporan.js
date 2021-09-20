const mongoose = require("mongoose");
const schema = mongoose.Schema({
  banyak_narkoba: { type: String, default: ""},
  cara_mengedarkan: { type: String, default: ""},
  ciri_terlapor: { type: String, default: ""},
  jenis_narkoba: { type: String, default: ""},
  nama_terlapor: { type: String, default: ""},
  peran_terlapor: { type: String, default: ""},
  profesi_terlapor: { type: String, default: ""},
  tempat_kejadian: { type: String, default: ""},
  usia_terlapor: { type: String, default: ""},
  file: { type: String, default: ""},
  "ref_number":{type: String, default: ""},
  created: { type: Date, default: Date.now }
});

// schema.index({ username: 1 }, { unique: true });
module.exports = mongoose.model("laporan", schema);
