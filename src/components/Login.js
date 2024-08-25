import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";

let initialValues = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const onSubmit = (values) => {
    console.log(values);
  };

  const handleSignInToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name && !isSignInForm) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  return (
    <>
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"
          alt="bg-image"
        />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form className="absolute w-3/12 bg-black my-36 p-12 bg-opacity-80 mx-auto right-0 left-0 text-white rounded-3xl">
          <p className="p-2 m-2 font-bold text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          {!isSignInForm && (
            <div>
              <Field
                type="text"
                placeholder="Name"
                className="p-4 h-10 m-2 w-full rounded-md text-black"
                name="name"
              />
              {!isSignInForm && (
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              )}
            </div>
          )}

          <div>
            <Field
              type="email"
              placeholder="Email Address"
              className="p-4 h-10 m-2 w-full rounded-md text-black"
              name="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div>
            <Field
              type="password"
              placeholder="Password"
              name="password"
              className="p-4 h-10 m-2 w-full rounded-md text-black"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-red-700 p-2 h-10 m-2 w-full rounded-md"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {isSignInForm ? (
            <div className="flex justify-center items-center my-2">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          ) : null}

          {isSignInForm ? (
            <div className="my-2">
              <span className="inline">New to Netflix? </span>
              <button
                type="reset"
                className="inline text-blue-500 hover:cursor-pointer"
                onClick={handleSignInToggle}
              >
                Sign up now
              </button>
            </div>
          ) : (
            <div className="my-2 inline-flex space-x-2">
              <span className="">Go back to </span>
              <p
                className="text-blue-500 hover:cursor-pointer"
                onClick={handleSignInToggle}
              >
                Sign In
              </p>
            </div>
          )}

          <div className="font-extralight text-sm my-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <Link to="/" className="text-blue-400 underline">
              Learn more
            </Link>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
