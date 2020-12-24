const express = require("express");
const router = express.Router();
const { helloWorld, createURL, fetchURL } = require("../controllers/url");

router.get("/hello-world", (req, res) => {
  helloWorld(req, res);
});

router.post("/create-url", async (req, res, next) => {
  await createURL(req, res, next);
});

router.get("/:slug", async (req, res, next) => {
  await fetchURL(req, res, next);
});

module.exports = router;
