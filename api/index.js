const express = require("express");
const router = require("./routes/index");

const app = express();

app.use("/api", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
