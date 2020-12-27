const mongoose = require("mongoose");

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
      if (!process.env.REGEX.test(u)) {
        throw new Error("Invalid URL!");
      }
    },
  },
});

module.exports = mongoose.model("url", urlSchema);
