const { connect } = require("mongoose");

const db = async () => {
  try {
    await connect(
      "mongodb+srv://dev:" +
        process.env.MONGO_ATLAS_PASS +
        "@cluster0.jbwfg.mongodb.net/" +
        process.env.MONGO_ATLAS_DB +
        "?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ).then(() => console.log("Connected to the database successfully!"));
  } catch (err) {
    console.log(err);
  }
};

module.exports = { db };
