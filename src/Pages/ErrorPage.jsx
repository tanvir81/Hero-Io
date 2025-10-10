import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import errorImage from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center min-h-[70vh] px-4 py-10 space-y-6">
        <img
          src={errorImage}
          alt="404 Error"
          className="w-64 sm:w-80 md:w-96"
        />

        <h2 className="text-2xl font-bold text-gray-700">
          Oops, page not found!
        </h2>
        <p className="text-gray-500 max-w-md">
          The page you are looking for is not found.
        </p>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Go Back!
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
