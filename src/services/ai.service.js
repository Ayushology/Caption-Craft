const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

async function generateCaption(file) {
  const base64Image = file.buffer.toString("base64");

  const response = await ai.models.generateContent({
   model: "gemini-2.5-flash",
    contents: [
      {
        inlineData: {
          mimeType: file.mimetype,
          data: base64Image,
        },
      },
      {
        text: "Generate a short caption for this image.",
      },
    ],
   config: {
  systemInstruction: "Generate a short, catchy, relatable caption for the image. Include relevant emojis and 2-4 hashtags. Keep it concise and engaging."
}
  });

  return response.text;
}

module.exports = generateCaption;