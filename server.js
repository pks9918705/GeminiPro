const { GoogleGenerativeAI } = require("@google/generative-ai");

const dotenv =require('dotenv')

dotenv.config();

// 1. Configuration
const api_key = "AIzaSyCPFuSkt8It6jluLefUYStF0GeAF9fhOmw";
const genAI = new GoogleGenerativeAI(api_key);
const generationConfig = { temperature: 0.9, topP: 1, topK: 1, maxOutputTokens: 4096 };

// 2. Initialise Model
const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig });

// 3. Generate Content
async function generateContent() {
  try {
    const prompt = "i have an interview in next week. based on my knowledge can you suggest me what project should i make to impress my recuriter. I have good knowledge of MERN and also made project on it. i can make complex project. I also have good knowledge of telegram bot development. provide me project ideas that i can make to impress. it should be useful to students also";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response.text());
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

// Run the function
generateContent();