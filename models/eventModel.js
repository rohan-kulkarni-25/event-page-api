const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  img: String,
  date: String,
  time: String,
  title: String,
  speaker: String,
  description: String,
  platform: String,
  duration: String,
  type: String,
  link: String,
  audience: Number,
  yt_id: String,
});

module.exports = mongoose.model("Event", eventSchema);
