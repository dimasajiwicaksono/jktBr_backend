const mongoose = require("mongoose");
const schema = mongoose.Schema({
  "provinsi_id":{type: String, default: ""},
  "provinsi_name":{type: String, default: ""},
  "kota_id":{type: String, default: ""},
  "kota_name":{type: String, default: ""},
  "kecamatan_id":{type: String, default: ""},
  "kecamatan_name":{type: String, default: ""},
  "tahun":{type: String, default: ""},
  "qty_bandar":{type: String, default: ""},
  "qty_tersangka":{type: String, default: ""},
  "qty_sabu":{type: String, default: ""},
  "qty_ganja":{type: String, default: ""},
  "qty_ekstasi":{type: String, default: ""},
  "qty_gorilla":{type: String, default: ""},
  "qty_lainnya":{type: String, default: ""},
  created: { type: Date, default: Date.now }
});

// schema.index({ username: 1 }, { unique: true });
module.exports = mongoose.model("kasus_narkoba", schema);
