const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    model: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
    },
    rating :{
      type: String
    },
    status:{
      type: Boolean,
      default: false
    },
    file: {
        type: String, //URL
        required: true,
      }
  });

  const vehicle = mongoose.model('vehicle', vehicleSchema);

  module.exports = vehicle;