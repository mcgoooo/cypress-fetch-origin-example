const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.post("/submit-form", (req, res) => {
  res.json(req.headers);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
