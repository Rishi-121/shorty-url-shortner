const url_endpoint = process.env.NODE_ENV === "production" ? `https://shorty-url-shrinker.herokuapp.com/` : `http://localhost:${process.env.PORT}/`;

module.exports = url_endpoint;
