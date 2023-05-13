const express = require("express");
const dotenv = require("dotenv");
const { router } = require("./src/routes/openaiRoute");

const app = express();
dotenv.config();

app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
