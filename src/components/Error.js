import { Link, useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate();
  console.error(err);

  const status = err?.status ?? 500;
  const statusText = err?.statusText ?? "Something went wrong";
  const message = err?.message ?? "";

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="text-pink-600 text-6xl mb-4">😕</div>
        <h1 className="text-3xl font-semibold mb-2">Error {status}</h1>
        <p className="text-gray-600 mb-2">{statusText}</p>
        {message && <p className="text-sm text-gray-500 mb-4">{message}</p>}

        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Go back
          </button>

          <Link
            to="/"
            className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
          >
            Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 border rounded-md hover:bg-gray-50"
          >
            Retry
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          If the issue continues,{" "}
          <a href="mailto:support@foodiehub.example" className="text-pink-600">
            contact support
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Error;
