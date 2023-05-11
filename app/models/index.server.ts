type Message {
  text: string; 
};

export async function getMessage(): Promise<Message> {
  return { text: "Scars and a thrill seeker. Gods help her..." };
}
