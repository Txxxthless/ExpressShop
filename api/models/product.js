const { Schema, model } = require("mongoose");

const product = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    required: true
  },
});

module.exports = model("Product", product);
