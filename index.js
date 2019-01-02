require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const eStatics = require("e-statics")(app);
app.use(helmet());
app.use(eStatics.counter);
app.use(morgan("tiny"));
app.use(express.static("www"));
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("started at %i", port);
});
