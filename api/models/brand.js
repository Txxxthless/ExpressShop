const { Schema, model } = require("mongoose");

const brand = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model("Brand", brand);
