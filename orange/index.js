require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;

app.get("/orange", (req, res) =>
  res.status(200).send("Hello.... Orange Server!!!!!")
);

app.get("/orange/health-check", (req, res) =>
  res.status(200).send("Orange Server: I'm Good")
);

app.listen(PORT, () => console.log("Orange service listening on :", PORT));
