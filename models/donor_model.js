const mongoose = require("mongoose");

const bloodDonorSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  gender: String,
  bloodGroup: String,
  location: String,
  phoneNumber: String,
  donatedEarlier: String,
  lastDonatedDate: Date
});

module.exports = mongoose.model('BloodDonor', bloodDonorSchema)