import { useState } from "react";
import { Link } from "react-router-dom";

type UserFormProps = {
  onFormSubmit: (userDetails: {
    username: string;
    password: string;
  }) => void;
  formType: "login" | "signup";
};

export default function UserForm({
  onFormSubmit,
  formType,
}: UserFormProps) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  console.log(userDetails);
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
    return;
  }
  const error = false;
  return (
    <main className="relative m-auto w-[300px] overflow-visible p-8 py-10 text-blue-800 sm:w-[400px] sm:text-xl md:text-2xl lg:w-[455px] lg:text-[28px]">
      <section
        aria-label="header"
        className="header text-center font-extrabold"
      >
        <h1 className="grid">
          {formType === "signup" ? "Sign up to" : "Log in to"}
          <span className="text-6xl tracking-widest sm:text-7xl">
            {" "}
            petflex
          </span>
        </h1>
        <img
          className="m-auto mt-2 w-[135px] sm:w-[153px]"
          src="/logo.svg"
          alt="petflex logo"
        />
      </section>
      <section className="registeration mt-12 lg:mt-14">
        <form
          action=""
          onSubmit={e => {
            e.preventDefault();
            onFormSubmit(userDetails);
          }}
          className="mt-auto grid gap-5 sm:gap-6 lg:gap-7"
        >
          <label className="grid gap-3 font-bold sm:gap-4 lg:gap-5">
            Username:
            <input
              name="username"
              onChange={onInputChange}
              value={userDetails.username}
              type="text"
              className="rounded-lg bg-stone-300 p-2 font-normal text-stone-800"
            />
          </label>
          <label className="grid gap-3 font-bold sm:gap-4 lg:gap-5">
            Password:
            <input
              name="password"
              onChange={onInputChange}
              value={userDetails.password}
              type="password"
              className="rounded-lg bg-stone-300 p-2 font-normal text-stone-800"
            />
          </label>
          <div className="h-[80px] text-center font-bold text-red-800 xl:text-2xl">
            {error && (
              <p className="">
                Username must contain between 5 and 20 characters{" "}
              </p>
            )}
          </div>

          <div className="m-auto mt-8 grid w-full gap-4 text-center lg:mt-9 xl:mt-11">
            <button
              type="submit"
              className="m-auto rounded-[20px] bg-blue-800 p-2 px-5 text-xl font-bold text-stone-100 sm:text-2xl md:text-[26px] lg:p-3 lg:px-6 lg:text-3xl lg:text-[28px]"
            >
              {formType === "signup" ? "Sign up" : "Log in"}
            </button>
            <p>
              {formType === "signup" ? (
                <p>
                  Already have an account?
                  <Link to="/login" className="font-extrabold">
                    {" "}
                    Login
                  </Link>
                </p>
              ) : (
                <p>
                  Don't have an account?
                  <Link to={"/signup"} className="font-extrabold">
                    {" "}
                    Sign up
                  </Link>
                </p>
              )}
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
