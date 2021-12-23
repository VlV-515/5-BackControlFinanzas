const moongose = require("mongoose");
const inSchema = moongose.Schema({
  quant: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = moongose.model("inSchema", inSchema);
