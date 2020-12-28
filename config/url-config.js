const url_endpoint = process.env.NODE_ENV === "production" ? `${process.env.HEROKU_APP_NAME}` : `http://localhost:${process.env.PORT}/`;

module.exports = url_endpoint;
