import { json } from "@remix-run/node";
import { useLoaderData } from "remix";
import { useOptionalUser } from "~/utils";

import { getMessage } from "~/models/index.server";

export const loader = async () => {
  return json({ message; await getMessage() });
}

export default function Index() {
  const user = useOptionalUser();
  const { message } = useLoaderData<typeof loader>();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        {message.text}
      </div>
    </main>
  );
}
