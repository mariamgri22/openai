const express = require("express");
const { generateOpenAIResponse } = require("../controllers/openaiController");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
      <html>
        <head>
          <title>OpenAI Chat</title>
        </head>
        <body>
          <h1>OpenAI Chat</h1>
          <form method="GET" action="/openai">
            <label for="message">Message:</label>
            <input type="text" name="message" id="message" required>
            <button type="submit">Send</button>
          </form>
        </body>
      </html>
    `);
});

router.get("/openai", generateOpenAIResponse);

module.exports = { router };
