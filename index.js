require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const db = require("./database/queries");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ hello: "World" });
});

app.get("/plants", db.getPlants);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
