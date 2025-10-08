import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigation } from "react-router";
const MainLayOut = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      {/* 🔄 DaisyUI Loader During Navigation */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm py-4 text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
