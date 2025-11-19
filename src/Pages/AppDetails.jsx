import React, { useState, useEffect } from "react";
import useApps from "../hooks/useApps";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";

import { useParams } from "react-router";
import { loadInstalledApps, saveInstalledApp } from "../utility/localStorage";
import downloadIcon from "../assets/icon-downloads.png";
import { formatNumber } from "../utility/format";
import reviewIcon from "../assets/icon-review.png";
import ratingIcon from "../assets/icon-ratings.png";
import appNotFoundImage from "../assets/App-Error.png";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [installed, setInstalled] = useState(false);

  const app = apps.find((app) => app.id === parseInt(id));
  console.log("installing app", app);
  // useeffect
  useEffect(() => {
    if (app) {
      const isAlreadyInstalled = loadInstalledApps().some(
        (p) => p.id === app.id
      );
      setInstalled(isAlreadyInstalled);
    }
  }, [app]);

  const handleInstall = () => {
    const success = saveInstalledApp(app);
    if (success) {
      setInstalled(true);
      toast.success(`Yahoo ⚡!!${app.title} installed successfully!`);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  if (error)
    return <span className="loading loading-spinner text-success"></span>;
  if (!app)
    return (
      <div className="flex flex-col items-center justify-center text-center mt-10 space-y-6">
        <img
          src={appNotFoundImage}
          alt="App Not Found"
          className="w-64 sm:w-80 md:w-96"
        />
        <h2 className="text-2xl sm:text-3xl font-bold text-red-500">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-gray-500 max-w-md">
          The App you are requesting is not found on our system. Please try
          another app.
        </p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-14 items-start mb-10">
        <img
          src={app.image}
          alt={app.title}
          className="w-full md:w-64 rounded shadow"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold ">{app.title}</h1>
          <p className="text-gray-600 mb-1">
            Developed by:{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
              {app.companyName}
            </span>
          </p>
          <hr className="my-6 border-gray-300" />
          <div className="flex justify-items-start items-center gap-20">
            <p className="text-sm text-gray-700 flex flex-col items-center gap-1">
              <img src={downloadIcon} alt="Downloads" className="w-7 h-7" />
              Downloads{" "}
              <span className="font-bold text-2xl">
                {formatNumber(app.downloads)}
              </span>
            </p>
            <p className="text-sm text-gray-700 flex flex-col items-center gap-1">
              <img src={ratingIcon} alt="Rating" className="w-7 h-7" />
              <span>Rating</span>{" "}
              <span className="font-bold text-2xl">{app.ratingAvg}</span>
            </p>

            <p className="text-sm text-gray-700 flex flex-col items-center gap-1">
              <img src={reviewIcon} alt="Reviews" className="w-8 h-8" />
              <span>Total Reviews</span>{" "}
              <span className="font-bold text-2xl">
                {formatNumber(app.reviews)}
              </span>
            </p>
          </div>
          <div className="relative group inline-block mt-2">
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`relative px-6 py-3 rounded-md font-bold text-white bg-gradient-to-r from-green-700 to-green-600 overflow-hidden transition-transform duration-300 ${
                installed ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              <span className="relative text-sm z-10 flex items-center gap-2">
                {installed ? "Installed" : "Install Now"}
                {!installed && app.size && (
                  <span className="text-sm font-medium">
                    (Size: <span className="font-semibold">{app.size}MB</span>)
                  </span>
                )}
              </span>

              {!installed && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300/30 to-transparent blur-sm transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 pointer-events-none"></span>
              )}
            </button>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="mb-10 flex flex-col mt-14">
        <h2 className="ml-10 text-xl font-semibold mb-4">Ratings</h2>

        <div className="w-full md:w-[90%] lg:w-[80%]">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={[...app.ratings].reverse()}
              layout="vertical"
              barSize={20}
            >
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fontSize: 14 }}
                width={80}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
