import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { loadInstalledApps, removeInstalledApp } from "../utility/localStorage";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import { formatNumber } from "../utility/format";

const InstalledApps = () => {
  const [installed, setInstalled] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const timer = setTimeout(() => {
      const apps = loadInstalledApps();
      setInstalled(apps);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const sortedApps = (() => {
    if (sortOrder === "downloads-asc") {
      return [...installed].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "downloads-desc") {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installed;
    }
  })();

  const handleUninstall = (app) => {
    removeInstalledApp(app.id);
    setInstalled((prev) => prev.filter((p) => p.id !== app.id));
    toast(`🗑️ ${app.title} uninstalled from your Device.`);
  };

  return (
    <div className="px-4 py-6 max-w-[1600px] mx-auto">
      {loading && (
        <div className="flex justify-center my-6">
          <span className="loading loading-spinner loading-lg text-success"></span>
        </div>
      )}

      {!loading && (
        <>
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6">
              Your Installed Apps
            </h1>
            <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <p className="text-xl font-bold text-gray-700">
              ({sortedApps.length}){" "}
              {sortedApps.length === 1 ? "App Found" : "Apps Found"}.
            </p>

            <label className="form-control w-full sm:w-auto max-w-xs">
              <select
                className="select select-bordered w-full  text-gray-400"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">Sort by Downloads</option>
                <option value="downloads-asc">Low → High</option>
                <option value="downloads-desc">High → Low</option>
              </select>
            </label>
          </div>
          {sortedApps.length === 0 && (
            <p className="text-center text-gray-500">No Installed Apps Found</p>
          )}

          {sortedApps.length > 0 && (
            <div className="space-y-4">
              {sortedApps.map((app) => (
                <div
                  key={app.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-base-100 shadow rounded-xl p-4 gap-4 transition-transform duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
                >
                  <img
                    className="w-full sm:w-24 h-auto object-cover rounded-md"
                    src={app.image}
                    alt={app.name}
                  />
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold">{app.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <p className="px-2 py-1  text-sm text-green-500 font-semibold flex items-center gap-1 rounded">
                        <img
                          src={downloadIcon}
                          alt="Downloads"
                          className="w-4 h-4"
                        />
                        {formatNumber(app.downloads)}
                      </p>
                      <p className="px-2 py-1  text-sm text-[#FF8811] font-semibold flex items-center gap-1 rounded">
                        <img
                          src={ratingIcon}
                          alt="Rating"
                          className="w-4 h-4"
                        />
                        {app.ratingAvg}
                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                    <button
                      onClick={() => handleUninstall(app)}
                      className="px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition-colors duration-300"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InstalledApps;
