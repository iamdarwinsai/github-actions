const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Naruto Uzumaki",
  });
});

app.listen(8000, () => {
  console.log("Started running on 8000");
});
