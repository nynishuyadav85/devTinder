const mongooes = require("mongoose");

const userSchema = new mongooes.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
    min: 18,
  },
  gender: {
    type: String,
    validate(value) {
      if (!["male", "female", "other"].includes(value)) {
        throw new Error("Gender data is not valid");
      }
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  photoUrl: {
    type: String,
    default: "Upload Photo",
  },
  about: {
    type: String,
    default: "This is default about you ",
  },
  skills: {
    type: [String],
  },
});

module.exports = mongooes.model("User", userSchema);
