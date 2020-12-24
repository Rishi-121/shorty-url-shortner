const mongoose = require("mongoose");
const validUrl = require("valid-url");

const urlSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  slug: {
    type: String,
    trim: true,
    match: /[a-z_-]/i,
  },
  url: {
    type: String,
    required: true,
    trim: true,
    validate(u) {
      if (validUrl.isUri(u) === undefined) {
        throw new Error("Invalid URL!");
      }
    },
  },
});

module.exports = mongoose.model("url", urlSchema);
