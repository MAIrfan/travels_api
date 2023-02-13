const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  mobile: {
    required: true,
    type: String,
  },
  vehicle: {
    required: true,
    type: String,
  },
});

const invoiceSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  mobile: {
    required: true,
    type: String,
  },
  pickup: {
    required: true,
    type: String,
  },
  drop: {
    required: true,
    type: String,
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
  },
});

const Driver = mongoose.model("Driver", driverSchema);
const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = { Driver, Invoice };
