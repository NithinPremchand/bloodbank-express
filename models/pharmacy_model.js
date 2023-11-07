const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  address: String,
  city: String,
  branches: Array,
  location: String,
});

module.exports = mongoose.model('Pharmacy', pharmacySchema)