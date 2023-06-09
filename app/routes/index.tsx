import { useLoaderData, json, useNavigate, useTransition } from "remix";
import { useOptionalUser } from "~/utils";
import { getMessage } from "~/models/index.server";

export const loader = async () => {
  return json({ message: await getMessage() });
}

export default function Index() {
  const user = useOptionalUser();
  const { message } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const transition = useTransition();
  const reload = () => {
    navigate('/', { replace: true }); // Navigate to the current URL (reload)
  };

  return (
    <main className="relative min-h-screen bg-white flex flex-col sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        {transition.state === "loading" ? 'Thinking of a new joke...' : message.text}
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={reload}>
          Tell me another
        </button>
      </div>
    </main>
  );
}
