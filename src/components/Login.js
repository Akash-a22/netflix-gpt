import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInToggle = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"
          alt="bg-image"
        />
      </div>

      <form className="absolute w-3/12  bg-black my-36 p-12 bg-opacity-80 mx-auto right-0 left-0 text-white rounded-3xl">
        <p className="p-2 m-2 font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 h-10 m-2 w-full rounded-md"
          ></input>
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 h-10 m-2 w-full rounded-md"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 h-10  m-2 w-full rounded-md"
        ></input>
        <button className="bg-red-700 p-2 h-10 m-2 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? (
          <div className="flex justify-center items-center my-2">
            <Link to="/forgot-password">Forgot password ?</Link>
          </div>
        ) : null}
        {isSignInForm ? (
          <div className="my-2">
            <span className="inline">New to Netflix? </span>
            <p
              className="inline text-blue-500 hover:cursor-pointer"
              onClick={handleSignInToggle}
            >
              Sign up now
            </p>
          </div>
        ) : (
          <div className="my-2 inline-flex space-x-2">
            <span className="">Go back to </span>
            <p
              className="text-blue-500 hover:cursor-pointer "
              onClick={handleSignInToggle}
            >
              Sign In
            </p>
          </div>
        )}
        <div className="font-extralight text-sm my-2">
          This page is protected by Google reCAPTCHA ensure you're not a bot.{" "}
          <Link to="/" className="text-blue-400 underline">
            Learn more
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
