const express = require("express");
const app = express();
const posts = require("./routes/posts-routes");
const users = require("./routes/authentication-routes");
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/v1/posts", posts);
app.use("/api/v1/users", users);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, console.log("Server is listening"));
  } catch (error) {
    console.log(error);
  }
};
start();
