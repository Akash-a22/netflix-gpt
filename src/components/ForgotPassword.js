import React from "react";
import { auth } from "../utils/firebaseConfig";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { updatePassword } from "firebase/auth";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  let errors = {};
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const ForgotPassword = () => {
  const updatePasswordOfUser = (password) => {
    const user = auth.currentUser;
    updatePassword(user, password)
      .then((response) => {
        console.log(response + "changed");
      })
      .catch((error) => {});
  };

  const onSubmit = (values) => {
    validateUser();
    updatePasswordOfUser(values.password);
  };
  const validateUser= (email) =>{
    
  }

  return (
    <div className="bg-gray-800 w-screen h-screen flex items-center justify-center">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Forgot Password
        </h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {() => (
            <Form>
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
              <div className="mb-4">
                <Field
                  type="password"
                  placeholder="Enter new password"
                  name="password"
                  className="w-full p-3 border border-black rounded-md focus:outline-none focus:ring-0 focus:ring-black"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 text-white p-3 rounded-md hover:bg-green-500 transition duration-200"
              >
                Reset Password
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
