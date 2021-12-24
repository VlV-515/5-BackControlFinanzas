const moongose = require("mongoose");
const outSchema = moongose.Schema({
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
module.exports = moongose.model("outSchema", outSchema);