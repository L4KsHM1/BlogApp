const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongodb"))
  .catch((err) => console.log("error", err));

app.use("/", (req, res) => {
  console.log("hey this is main url");
});
app.listen("5000", () => {
  console.log("backend server running on port 5000");
});
