import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event: any) => {
    event.preventDefault();

    navigate(`/bookmarks`);
  };

  return (
    <div className="container mx-auto border border-zinc-300 p-8 rounded-md drop-shadow-md mt-12 max-w-md">
      <form className="flex flex-col justify-center">
        <p
          className="font-bold text-4xl text-center mb-8 mt-4"
          aria-label="Login"
        >
          Login
        </p>
        <label htmlFor="username" aria-label="User Name">
          Username
        </label>
        <input className="rounded-md" type="text" id="username" />
        <label htmlFor="password" aria-label="password" className="mt-4">
          Password
        </label>
        <input className="rounded-md" type="password" id="password" />
        <button
          onClick={handleLogin}
          className="rounded-md border border-black mt-12 p-4 cursor-pointer bg-sky-500/40 hover:bg-sky-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
