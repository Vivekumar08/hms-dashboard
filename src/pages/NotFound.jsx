// NotFound.js

import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            404 - Not Found
          </h2>
          <p className="mt-2 text-center text-lg text-gray-600">
            The page you are looking for does not exist. <br /> This module is under
            development!!
          </p>
          <Link to={"/"}>
            <p className="mt-2 text-center text-lg text-blue-500">
              Back to Home Page.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
