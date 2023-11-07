const mongoose = require("mongoose");

const medicalSupplierSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantities: Number,
  pricing: Number,
  contact: String,
  location: {
    city: String,
    state: String,
    zipCode: String,
  },
});

module.exports = mongoose.model("MedicalSupplier", medicalSupplierSchema);
