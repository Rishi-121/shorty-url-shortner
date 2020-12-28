let url_endpoint = `http://localhost:${process.env.PORT}/`;

if (process.env.NODE_ENV === "production") {
  url_endpoint = `https://shorty-url-shrinker.herokuapp.com/`;
}

module.exports = url_endpoint;
