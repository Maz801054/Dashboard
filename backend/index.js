const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/item");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:123@cluster0.sugs3kt.mongodb.net/Project?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/AddProject", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3002, () => {
  console.log("Server is Running...");
});
