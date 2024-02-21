const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Kakashi Hatake",
  });
});

app.listen(8000, () => {
  console.log("Started running on 8000");
});
