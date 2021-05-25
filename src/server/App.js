const express = require("express");
const fetch = require("node-fetch");
const axios = require("axios");

// Import middleware
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

// setup default port
const port = process.env.PORT || 9000;

const app = express();

// Implement middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/positions", (req, res) => {
  let URL = "";
  if (req.query.lat || req.query.long) {
    let { lat, long } = req.query;
    URL = `https://jobs.github.com/positions.json?lat=${lat}&long=${long}`;
  } else if (req.query.search || req.query.full_time || req.query.location) {
    let { search, full_time, location } = req.query;
    URL = encodeURI(
      `https://jobs.github.com/positions.json?search=${search}&full_time=${full_time}&location=${location}`
    );
  } else {
    URL = `https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823`;
  }
  axios
    .get(URL)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => res.send(error));
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
