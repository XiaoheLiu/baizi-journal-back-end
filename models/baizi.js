var mongoose = require("mongoose");

var baiziSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  date: { type: String, required: "Baizi must have a date!" },
  weather: { type: String, default: "" },
  content: { type: String, required: "Baizi content cannot be blank!" }
});

module.exports = mongoose.model("Baizi", baiziSchema);
