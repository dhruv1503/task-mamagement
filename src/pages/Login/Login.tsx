import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { Navbar } from "../../components/Navbar/Navbar";

export const Login = () => {
  return (
    <div className="">
        <Navbar/>
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] h-full max-h-[calc(100vh-5rem)]">
        <div className="justify-center bg-white px-10 py-12 w-96 rounded shadow-xl">
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
            <p className="text-md text-slate-400">
              {" "}
              to continue to Life Tracker
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-4">
              <Input
                type="email"
                className="rounded border-2 px-1 py-2 border-zinc-400"
                label="Email"
                placeholder="Enter email"
                name="email"
              />
              <Input
                type="password"
                className="rounded border-2 px-1 py-2 border-zinc-400"
                label="Password"
                placeholder="Enter password"
                name="password"
              />

              <button
                type="submit"
                className="rounded px-3 py-2 bg-slate-900 text-slate-100 disabled:cursor-not-allowed disabled:opacity-10"
              >
                Submit
              </button>

              <p>
                Not Registered?{" "}
                <Link className="underline hover:no-underline" to="/">
                  {" "}
                  Click here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
