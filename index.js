const express = require("express");
const app = express();
var path = require("path");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/DataBase");
dotenv.config();
connectDB();
const cors = require("cors");

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.removeHeader("x-powered-by");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());
app.use(require("./routes/Routes"));
app.get("/", (req, res) => {
  res.json("hello world");
});

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
