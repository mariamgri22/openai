const express = require("express");
const { generateOpenAIResponse } = require("../controllers/openaiController");

const router = express.Router();

router.post("/openai", generateOpenAIResponse);

module.exports = { router };
