const mongoose = require("mongoose")

const SparePartsSchema = new mongoose.Schema({
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
    price: {
      type: Number,
      required: true
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

  const spareParts = mongoose.model('SpareParts', SparePartsSchema);

  module.exports = spareParts;