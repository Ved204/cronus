import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Message = {
  text?: string; 
};

export async function getMessage(): Promise<Message> {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Tell me completely random unique joke that hasn't heard as much before and it can't be about fish",
    temperature: 1,
    max_tokens: 250,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return { text: response.data.choices[0].text };
}
