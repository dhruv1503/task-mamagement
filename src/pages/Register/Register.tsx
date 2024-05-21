import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { Navbar } from "../../components/Navbar/Navbar";
import {  ChangeEvent, MouseEvent, useEffect, useState } from "react";

type RegistrationForm = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

export const Register = () => {
  const [form, setForm] = useState<RegistrationForm>({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value) {
      setForm((prevState) => ({ ...prevState, [name]: value }));
    }
  };
  const resetRegistrationForm = (e : MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("reset clicked")
    setForm({ firstName: "", lastName: "", password: "", email: "" });
  };

  useEffect(() => {
console.log(form)
  }, [form])
  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] h-full max-h-[calc(100vh-5rem)]">
        <div className="justify-center bg-white px-10 py-12 w-96 rounded shadow-xl">
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Create your account
            </h1>
            <p className="text-md text-slate-400">
              {" "}
              to continue to Life Tracker
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-4">
              <Input
                type="text"
                className="rounded border-2 px-1 py-2 border-zinc-400"
                label="First Name"
                placeholder="Enter first name"
                name="firstName"
                onChange={handleInputChange}
                value={form.firstName}
              />
              <Input
                type="text"
                className="rounded border-2 px-1 py-2 border-zinc-400"
                label="Last Name"
                placeholder="Enter last name"
                name="lastName"
                value={form.lastName}
                onChange={handleInputChange}
              />
              <Input
                type="email"
                className="rounded border-2 px-1 py-2 border-zinc-400"
                label="Email"
                placeholder="Enter email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
              />
              <Input
                type="password"
                className="rounded border-2 px-1 py-2 border-zinc-400"
                label="Password"
                placeholder="Enter password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
              />
              <div className="py-3 flex justify-end">
                <button
                  type="reset"
                  className="rounded px-3 py-2 text-slate-900 bg-slate-100 mx-2"
                  onClick={resetRegistrationForm}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="rounded px-3 py-2 bg-slate-900 text-slate-100 disabled:cursor-not-allowed disabled:opacity-10"
                  disabled={
                    !(
                      form?.firstName &&
                      form.lastName &&
                      form.email &&
                      form.email
                    )
                  }
                >
                  Submit
                </button>
              </div>
              <p>
                Already registered?{" "}
                <Link className="underline hover:no-underline" to="/login">
                  {" "}
                  Click here to Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
