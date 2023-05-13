const express = require("express");
const {
  generateOpenAIResponse,
} = require("../controllers/openaiController");

const router = express.Router();

router.get("/", generateOpenAIResponse);

module.exports = { router };
