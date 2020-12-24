const mongoose = require("mongoose");
const URL = require("../models/url");
const { nanoid } = require("nanoid");
const path = require("path");

const helloWorld = (req, res) => {
  res.status(200).json({
    message: "👍",
    success: true,
  });
};

const createURL = async (req, res, next) => {
  try {
    let { slug, url } = req.body;
    if (!slug) {
      slug = nanoid(7);
    } else {
      const existing = await URL.findOne({ slug });
      if (existing) {
        throw new Error("Slug is already in use!");
      }
    }
    slug = await slug.toLowerCase();
    const newUrl = new URL({
      _id: new mongoose.Types.ObjectId(),
      slug: slug,
      url: url,
    });
    await newUrl.save();
    res
      .status(201)
      .send("<p>https://shorty-url-shrinker.herokuapp.com/" + slug + "</p>");
  } catch (error) {
    error.status = 500;
    next(error);
  }
};

const fetchURL = async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const existing = await URL.findOne({ slug });
    if (!existing) {
      return res
        .status(404)
        .sendFile(path.join(__dirname, "../public/404.html"));
    } else {
      return res.redirect(existing.url);
    }
  } catch (error) {
    error.status = 500;
    next(error);
  }
};

module.exports = { helloWorld, createURL, fetchURL };
