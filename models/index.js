var mongoose = require("mongoose");
// mongoose.set("debug", true);
var url = process.env.DATABASEURL || "mongodb://localhost/baizi_journal";
mongoose.connect(
  url,
  { useNewUrlParser: true }
);
mongoose.set("useFindAndModify", false);

mongoose.Promise = Promise;

module.exports.Baizi = require("./baizi");
