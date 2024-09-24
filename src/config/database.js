const mongooes = require("mongoose");

const connectDB = async () => {
  await mongooes.connect(
    "mongodb+srv://nynishuyadav85:tinder@namastenode.zkjov.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
