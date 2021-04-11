const Amadeus = require("amadeus");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const { CLIENT_ID, CLIENT_SECRET } = require("./config");
app.use(bodyParser.json());

const amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

app.get("/", function (req, res) {
  res.send("Hello Welcome to Flight Search Website");
});

app.post(`/inspirationSearch`, async (req, res) => {
  console.log("body", req);
  const response = await amadeus.shopping.flightDestinations
    .get({
      origin: req.body.from,
    })
    .catch((x) => console.log(x));
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

var server = app.listen(process.env.PORT || 2800, () => {
  console.log("Howdy, I am running at PORT 2800");
});
