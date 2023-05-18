const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { router } = require("./src/routes/openaiRoute");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
