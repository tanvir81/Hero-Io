import React from "react";
import heroImage from "../assets/hero.png";
import appIcon from "../assets/app.png";
import appStoreIcon from "../assets/app-store.png";

const Banner = () => {
  return (
    <section className="bg-gray-50  ">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl sm:mx-5 mt-6">
          <h1 className="text-4xl lg:text-5xl font-bold  mb-4">
            We Build <br />{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-gray-400 text-base lg:text-lg mb-6">
            At HERIO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-md bg-gray-100 text-black border border-gray-200 font-semibold hover:opacity-90 transition"
            >
              <img
                src={appIcon}
                alt="Google Play"
                className="w-7 h-7 object-contain"
              />
              Google Play
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-md bg-gray-100 text-black border border-gray-200 font-semibold hover:opacity-90 transition"
            >
              <img
                src={appStoreIcon}
                alt="App Store"
                className="w-7 h-7 object-contain"
              />
              App Store
            </a>
          </div>

          <div>
            <img
              src={heroImage}
              alt="App Preview"
              className="lg:w-[885px] object-contain mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-12 px-8 rounded-md">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-6">
          Trusted by Millions, Built for You
        </h1>

        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-sm">Total Downloads</p>
            <p className="text-5xl font-bold py-6">29.6M+</p>
            <p>21% more than last month</p>
          </div>
          <div>
            <p className="text-sm">Total Reviews </p>
            <p className="text-5xl font-bold py-6">906K+</p>
            <p>46% more than last month </p>
          </div>
          <div>
            <p className="text-sm">Active Apps</p>
            <p className="text-5xl font-bold py-6">132+</p>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
