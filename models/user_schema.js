const mongoose = require("mongoose");
const schema = mongoose.Schema({
  username: String,
  email: String,
  first_name: { type: String, default: "" },
  last_name: { type: String, default: "" },
  province_id: { type: String, default: "" },
  city_id:{ type: String, default: "" },
  sub_district_id: { type: String, default: "" },
  urban_village_id: {type: String, default: ""},
  password: String,
  created: { type: Date, default: Date.now }
});

schema.index({ username: 1 }, { unique: true });
module.exports = mongoose.model("users", schema);
