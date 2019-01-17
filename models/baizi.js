import mongoose, { Schema } from "mongoose";

var baiziSchema = new Schema({
  title: { type: String, default: "" },
  date: { type: String, required: "Baizi must have a date!" },
  weather: { type: String, default: "" },
  content: { type: String, required: "Baizi content cannot be blank!" },
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("Baizi", baiziSchema);
