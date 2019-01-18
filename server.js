import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import baiziRoutes from "./routes/baizi";
import userRoutes from "./routes/user";
import cors from "cors";

const port = process.env.PORT || 3001;

const app = express();

//mongodb init
var url = process.env.DATABASEURL || "mongodb://localhost/baizi_journal";
mongoose.connect(
  url,
  { useNewUrlParser: true }
);
mongoose.set("useFindAndModify", false);

mongoose.Promise = Promise;

// App CONFIG
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use("/api/baizi", baiziRoutes);
app.use("/api/user", userRoutes);

// Start Server
app.listen(port, function(err, res) {
  if (err) {
    console.log("Server error.");
  } else {
    console.log(`Server is listening at port ${port} .`);
  }
});
