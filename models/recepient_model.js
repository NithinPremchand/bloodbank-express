const mongoose = require("mongoose");

const bloodRecipientSchema = new mongoose.Schema({
  name: String,
  gender: String,
  bloodGroup: String,
  location: String,
  dateTime: Date,
  phoneNumber: String
});

module.exports = mongoose.model('BloodRecepient', bloodRecipientSchema)