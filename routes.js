const express = require("express");
const { Driver, Invoice } = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(500).json({ msg: "server up and running!" });
});

router.post("/drivers", (req, res) => {
  try {
    const driver = new Driver({
      name: req.body.name,
      mobile: req.body.mobile,
      vehicle: req.body.vehicle,
    });
    driver
      .save()
      .then(() => res.status(200).json(driver))
      .catch((error) => res.json(error));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/drivers", async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/invoices", async (req, res) => {
  try {
    let invoice = await Invoice.create({
      name: req.body.name,
      mobile: req.body.mobile,
      pickup: req.body.pickup,
      drop: req.body.drop,
      driver: req.body.driver,
    });
    invoice = await invoice.populate('driver');

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/invoices", async (req, res) => {
  try {
    const invoices = await Invoice.find().populate("driver");
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
