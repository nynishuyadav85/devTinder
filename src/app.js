const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("Added");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userFirstName = req.body.firstName;
  try {
    const user = await User.find({ firstName: userFirstName });
    if (user.length == 0) {
      res.status(400).send("Error: No user found ");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("DataBase Connected");
    app.listen(3000, () => {
      console.log("App is running succesuflly on port 3000......");
    });
  })
  .catch((err) => {
    console.error("DB not connected");
  });
