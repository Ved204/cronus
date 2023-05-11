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
    prompt: "tell me a joke a knock knock joke",
    temperature: 1,
    max_tokens: 250,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return { text: response.data.choices[0].text };
}
