import express from "express";
import bodyParser from "body-parser";
import baiziRoutes from "./routes/baizis";
import userRoutes from "./routes/user";
const  port = process.env.PORT || 3001;

const app = express();
// App CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use("/api/baizis", baiziRoutes);
app.use("/api/user", userRoutes);

// Start Server
app.listen(port, function(err, res) {
  if (err) {
    console.log("Server error.");
  } else {
    console.log(`Server is listening at port ${port} .`);
  }
});
