const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const connectToDatabase = require("./database");

require("dotenv").config();

connectToDatabase();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
