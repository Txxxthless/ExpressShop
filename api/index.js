require("dotenv").config();
const express = require("express");
const router = require("./routes/index");
const mongoose = require("mongoose");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    const url = process.env.DB_CONNECTION;
    await mongoose.connect(url, { useNewUrlParser: true });
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
