if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("./config/db").db();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./public"));

const urlRoutes = require("./routes/url");
app.use("/", urlRoutes);

app.use((error, req, res, next) => {
  res.status(error.status).json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "👍" : error,
  });
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}!`)
);
