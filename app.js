const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(cors()); //USE THE API ACROSS ALL THE DOMAINS
app.use(bodyParser.json());

//import Routes
const postsRoute = require("./routes/posts");

//middleware
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("we are on home");
});

//Connect to dB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to dB!");
  }
);

//listen
app.listen(3000);
