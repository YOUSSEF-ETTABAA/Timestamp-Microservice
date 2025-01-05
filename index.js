// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/:date?", (req, res) => {
  const dateParams = req.params.date;
  let date;
  // Check if date parameter is empty
  if (!dateParams) {
    date = new Date();
  }
  // Check if date is a valid timestamp or date string
  else if (!isNaN(dateParams)) {
    data = new Date(parseInt(dateParams));
  } else {
    date = new Date(dateParams);
  }
  // If date is invalid, respond with an error
  if (date instanceof Date && !isNaN(date.getTime())) {
    // Return Unix and UTC time format
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    });
  } else {
    res.json({ error: "Invalid Date" });
  }
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
