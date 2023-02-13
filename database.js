const mongoose = require("mongoose");
require("dotenv").config();

const connectToDatabase = () =>
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));

module.exports = connectToDatabase;
