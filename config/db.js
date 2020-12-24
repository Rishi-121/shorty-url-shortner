const { connect } = require("mongoose");

const db = async () => {
  try {
    await connect(process.env.DB_URI, {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => console.log("Connected to the database successfully!"));
  } catch (err) {
    console.log(err);
  }
};

module.exports = { db };
