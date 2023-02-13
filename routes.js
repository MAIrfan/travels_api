const express = require("express");
const { Driver, Invoice } = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "server up and running!" });
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
      .then(() => res.json("Saved new driver"))
      .catch((error) => res.json(error));
  } catch (error) {
    res.json(error);
  }
});

router.get("/drivers", async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.json(error);
  }
});

router.post("/invoices", async (req, res) => {
  try {
    const invoice = new Invoice({
      name: req.body.name,
      mobile: req.body.mobile,
      pickup: req.body.pickup,
      drop: req.body.drop,
      driver: req.body.driver,
    }).populate('driver');
    invoice
      .save()
      .then(() => res.json(invoice))
      .catch((error) => res.json(error));
  } catch (error) {
    res.json(error);
  }
});

router.get("/invoices", async (req, res) => {
  try {
    const invoices = await Invoice.find().populate('driver');
    res.json(invoices);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
