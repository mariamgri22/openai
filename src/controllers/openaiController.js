const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateOpenAIResponse(req, res) {
  const userMessage = req.body.message; // Access the message from the request body
  if (!userMessage) {
    res.status(400).send("Message cannot be empty");
    return;
  }
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    });

    const responseMessage = completion.data.choices[0].message.content;
    console.log(completion.data.choices[0].message.content);
    res.send(responseMessage);
  } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    res.status(500).send("Error generating response");
  }
}

module.exports = { generateOpenAIResponse };