const mongoose = require("mongoose");

const rectangleSchema = new mongoose.Schema({
  length: {
    type: Number,
    required: true,
    min: 0,
  },
  width: {
    type: Number,
    required: true,
    min: 0,
  },
  area: {
    type: Number,
    default: 0,
  },
  perimeter: {
    type: Number,
    default: 0,
  },
  diagonal: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model("Rectangle", rectangleSchema);