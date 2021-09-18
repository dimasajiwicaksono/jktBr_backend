const mongoose = require("mongoose");
const schema = mongoose.Schema({
  "nama_kegiatan":{type: String, default: ""},
  "date":{type: Date, default: ""},
  "tempat_pelaksanaan":{type: String, default: ""},
  "jumlah_peserta":{type: String, default: ""},
  "tujuan":{type: String, default: ""},
  "img":{type: String, default: ""},
  "ref_number":{type: String, default: ""},
  created: { type: Date, default: Date.now }
});

// schema.index({ username: 1 }, { unique: true });
module.exports = mongoose.model("pencegahan", schema);
