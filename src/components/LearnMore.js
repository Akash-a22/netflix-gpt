import React from "react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sorry !</h2>
          <p className="text-gray-700 mb-4">
            This site is just for development purpose.
          </p>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
