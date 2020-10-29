const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const { searchLocations, getLocationWeather } = require("./weather");

const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", expressHandlebars());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

app.get("/forecast/:woeid", (req, res) => {
  const woeid = req.params.woeid;

  getLocationWeather(woeid, (error, locationWeather) => {
    if (error) {
      res.render("error", { errorMessage: error });
      return;
    }

    res.render("forecast", locationWeather);
  });
});

app.get("/", (req, res) => {
  const searchText = req.query.searchText;

  if (!searchText) {
    res.render("home", { searchText });
    return;
  }

  searchLocations(searchText, (error, locations) => {
    res.render("home", { searchText, locations, error });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
