const mongoose = require("mongoose");

const url_regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

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
      if (!url_regex.test(u)) {
        throw new Error("Invalid URL!");
      }
    },
  },
});

module.exports = mongoose.model("url", urlSchema);
