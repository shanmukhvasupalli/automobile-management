const mongoose = require("mongoose")

const sellerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required:true,
        enum: ['male', 'female', 'others']
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
          type: String,
          required: true,
          unique:true
    },
  });

const seller = mongoose.model('seller', sellerSchema);

module.exports = seller;