require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const db = require("./database/queries");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/plants", db.getPlants);

app.get("/token", (req, res) => {
  res.json(process.env.OPENWEATHER_API_KEY);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
