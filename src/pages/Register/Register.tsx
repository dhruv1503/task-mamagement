import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { Navbar } from "../../components/Navbar/Navbar";
import { ChangeEvent, MouseEvent, useState } from "react";
import { EMAIL_REGEX } from "../../constants/regex";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

type RegistrationForm = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

type RegistrationFormError = {
  firstName: boolean;
  lastName: boolean;
  password: boolean;
  email: boolean;
};

export const Register = () => {
  const [form, setForm] = useState<RegistrationForm>({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const [isErrorField, setIsErrorField] = useState<RegistrationFormError>({
    firstName: false,
    lastName: false,
    password: false,
    email: false,
  });
  const dispatch = useDispatch();
  const users = useSelector((state : {usersDatabase : any, user : any, project: any}) => (state.usersDatabase))

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
    setIsErrorField((prevState) => ({ ...prevState, [name]: false }));
  };

  const textInputValidation = (textInput: string, label: string): string | null => {
    if (!textInput) {
      return `${label} is required.`;
    }
    if (textInput.trim().length <= 2) {
      return `${label} should have at least 3 characters.`;
    }
    if (/[*/|'/$-&|xp_]/.test(textInput)) {
      return "Special characters (*, |, /, $, -, &, xp_) are not allowed.";
    }
    return null;
  };

  const emailInputValidation = (emailInput: string): string | null => {
    if (!emailInput) {
      return "Email is required.";
    }
    if (!EMAIL_REGEX.test(emailInput)) {
      return "Enter a valid email address.";
    }
    return null;
  };

  const errorHandler = () => {
    let errorMessages: RegistrationForm = {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
    };
    const hasError: RegistrationFormError = {
      firstName: false,
      lastName: false,
      password: false,
      email: false,
    };

    const firstNameError = textInputValidation(form.firstName.trim(), "First Name");
    const lastNameError = textInputValidation(form.lastName.trim(), "Last Name");
    const emailError = emailInputValidation(form.email.trim());
    if (firstNameError) {
      errorMessages.firstName = firstNameError;
      hasError.firstName = true;
    }
    if (lastNameError) {
      errorMessages.lastName = lastNameError;
      hasError.lastName = true;
    }
    if (emailError) {
      errorMessages.email = emailError;
      hasError.email = true;
    }
    if (!form.password) {
      errorMessages.password = "Password is required.";
      hasError.password = true;
    }

    setErrors(errorMessages);
    setIsErrorField(hasError);
    return hasError;
  };

  const resetRegistrationForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setForm({ firstName: "", lastName: "", password: "", email: "" });
    setErrors({ firstName: "", lastName: "", password: "", email: "" });
    setIsErrorField({
      firstName: false,
      lastName: false,
      password: false,
      email: false,
    });
  };

  const submitButtonClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const allFieldsErrors = errorHandler();
    if (Object.values(allFieldsErrors).some((error) => error)) {
      return;
    }
    if(isExistingUser(form.email)){
      // toast.remove("EMAIL_EXISTS")
      return toast.error("Email already exists!", {id : "EMAIL_EXISTS"});
    }
    dispatch({ type: "ADD_USER", payload: form });
     toast.success("Your registration has been successful.", {id : "REGISTERED_SUCCESSFULLY"});
     resetRegistrationForm(e);
     return
  };

  const isExistingUser = (email : string) : boolean => {
    const existingUser = users.find((user : any) => (user?.userDetails.emailId === email))
    if(existingUser){
      return true
    }
    return false;
  }

  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] h-full max-h-[calc(100vh-5rem)]">
        <div className="justify-center bg-white px-6 py-4 w-96 rounded shadow-2xl">
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
            <p className="text-md text-slate-400">to continue to Life Tracker</p>
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
                errorMessage={errors.firstName}
                error={isErrorField.firstName}
              />
              <Input
                type="text"
                className="rounded border-2 px-1 py-2 border-zinc-400"
                label="Last Name"
                placeholder="Enter last name"
                name="lastName"
                value={form.lastName}
                onChange={handleInputChange}
                errorMessage={errors.lastName}
                error={isErrorField.lastName}
              />
              <Input
                type="email"
                className="rounded border-2 px-1 py-2 border-zinc-400"
                label="Email"
                placeholder="Enter email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                errorMessage={errors.email}
                error={isErrorField.email}
              />
              <Input
                type="password"
                className="rounded border-2 px-1 py-2 border-zinc-400"
                label="Password"
                placeholder="Enter password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                errorMessage={errors.password}
                error={isErrorField.password}
              />
              <div className="py-3 flex justify-end">
                <button
                  type="reset"
                  className="rounded my-2 px-3 py-2 text-slate-900 bg-slate-100 mx-2"
                  onClick={resetRegistrationForm}
                >
                  Reset
                </button>
                <button
                  onClick={submitButtonClickHandler}
                  className="my-2 px-3 py-2 bg-[#636bff] text-neutral-50 hover:bg-slate-200 hover:text-slate-900 rounded transition-colors ease-in-out delay-75 duration-300 active:bg-slate-400 active:scale-y-95 active:scale-x-95"
                >
                  Submit
                </button>
              </div>
              <p>
                Already registered?{" "}
                <Link className="underline hover:no-underline" to="/login">
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
