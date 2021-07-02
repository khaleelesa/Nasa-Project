const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MediaSchema = new Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
});

const Media = mongoose.model("media", MediaSchema);

module.exports = Media;
