import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-900">
      <div className="px-40 py-20 bg-gradient-to-r from-indigo-600 to-blue-400 rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-slate-900 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-slate-900 md:text-3xl">
            <span className="text-slate-800">Oops!</span> Page {error.statusText || error.massage}
          </h6>

          <p className="mb-8 text-center text-slate-700 md:text-lg">The page you’re looking for doesn’t exist.</p>
          <a href="/" className="px-6 py-2 text-sm font-semibold rounded-md text-blue-400 bg-slate-700">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
