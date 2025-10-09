import React from "react";
import logo from "../assets/logo.png";
import facebookIcon from "../assets/facebook.png";
import githubIcon from "../assets/git_hub.png";
import twitterIcon from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-neutral-content px-6 py-10">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <p className="text-lg font-semibold">HERO.IO</p>
        </div>

        <div>
          <p className="text-lg font-semibold mb-2">Social Links</p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/tanvir81"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} HERO.IO. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
