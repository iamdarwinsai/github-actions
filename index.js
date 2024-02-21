const express = require("express");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  return res.json({
    message: "All done enjoy learned CI-CD basic node app",
    name: `${process.env.NAME}`,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Port started working on ${process.env.PORT}`);
});
