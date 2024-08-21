import Groq from "groq-sdk";
require("dotenv").config()


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// export async function main() {
//   const chatCompletion = await getGroqChatCompletion();
//   // Print the completion returned by the LLM.
//   console.log(chatCompletion.choices[0]?.message?.content || "");
// }

export async function getGroqChatCompletion(prompt:string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content:prompt,
      },
    ],
    model: "llama3-8b-8192",
  });
}
