const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connetDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("mongodb is connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connetDB;
//12:48
