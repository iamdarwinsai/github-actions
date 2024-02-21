const express = require("express");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  return res.json({
    message: "Naruto Uzumaki",
    name: `${process.env.NAME}`,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Port started working on ${process.env.PORT}`);
});
