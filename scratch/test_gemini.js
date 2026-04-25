const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config({ path: ".env.local" });

async function listModels() {
  const apiKey = process.env.GEMINI_API_KEY || "";
  try {
    console.log("Listing models...");
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();
    console.log("Available Models:", JSON.stringify(data, null, 2));
  } catch (e) {
    console.error("Error listing models:", e);
  }
}

listModels();
