import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const ai = {
  async generateContent(prompt) {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: process.env.GROQ_MODEL,
      temperature: 0.7,
      max_tokens: 8192,
    });

    return completion.choices[0].message.content;
  }
};

export default ai;