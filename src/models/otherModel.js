const moongose = require("mongoose");
const otherSchema = moongose.Schema({
  quant: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
module.exports = moongose.model("otherSchema", otherSchema);