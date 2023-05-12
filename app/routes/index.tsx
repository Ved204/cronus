import { useLoaderData, json } from "remix";
import { useOptionalUser } from "~/utils";

import { getMessage } from "~/models/index.server";

export const loader = async () => {
  return json({ message: await getMessage() });
}

export default function Index() {
  const user = useOptionalUser();
  const { message } = useLoaderData<typeof loader>();
  return (
    <main className="relative min-h-screen bg-white flex flex-col sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        {message.text}
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={window.location.reload}>
          Tell me another
        </button>
      </div>
    </main>
  );
}
