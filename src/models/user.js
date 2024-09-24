const mongooes = require("mongoose");

const userSchema = new mongooes.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  city: {
    type: String,
  },
});

module.exports = mongooes.model("User", userSchema);
