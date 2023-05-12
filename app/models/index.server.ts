import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Message = {
  text?: string; 
};

export async function getMessage(): Promise<Message> {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "system", content: "You a comedian, only reply in jokes"}, {role: "user", content: "Tell me a joke"}],
  });
  return { text: completion.data.choices[0].message?.content };
}
