import React, { useState } from "react";

import { toast } from "react-toastify";
import { loadInstalledApps, removeInstalledApp } from "../utility/localStorage";
import downloadIcon from "../assets/icon-downloads.png";
import { formatNumber } from "../utility/format";

const InstalledApps = () => {
  const [installed, setInstalled] = useState(() => loadInstalledApps());
  const [sortOrder, setSortOrder] = useState("none");

  if (!installed.length) return <p>No Installed Apps Found</p>;

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
    <div className="space-y-6">
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          My Installation{" "}
          <span className="text-sm text-gray-500">
            ({sortedApps.length}) Apps Found.
          </span>
        </h1>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="downloads-asc">Low → High</option>
            <option value="downloads-desc">High → Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="card card-side bg-base-100 shadow border"
          >
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={app.image}
                alt={app.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{app.name}</h3>
              <p className="text-base-content/70">{app.category}</p>
              <p className="text-sm text-gray-700 flex items-center gap-1">
                <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
                {formatNumber(app.downloads)} Downloads
              </p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <button
                onClick={() => handleUninstall(app)}
                className="btn btn-outline"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
