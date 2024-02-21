const express = require("express");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  return res.json({
    message: "Oka pilla ni set cheyi",
    name: `${process.env.NAME}`,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Port started working on ${process.env.PORT}`);
});
