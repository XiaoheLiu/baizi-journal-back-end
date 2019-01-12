var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  baiziRoutes = require("./routes/baizis"),
  port = process.env.PORT || 3001;

// App CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use("/api/baizis", baiziRoutes);

// Start Server
app.listen(port, function(err, res) {
  if (err) {
    console.log("Server error.");
  } else {
    console.log(`Server is listening at port ${port} .`);
  }
});
