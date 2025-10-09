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

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [installed, setInstalled] = useState(false);

  const app = apps.find((app) => app.id === parseInt(id));
  console.log("installing app", app);

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
    } else {
      toast.info("App is already installed.");
    }
  };

  if (loading) return <p className="text-center">Loading app details...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading app</p>;
  if (!app) return <p className="text-center text-gray-500">App not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
        <img
          src={app.image}
          alt={app.title}
          className="w-full md:w-64 rounded shadow"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
          <p className="text-gray-600 mb-1">Company: {app.companyName}</p>
          <p className="text-sm text-gray-700">Rating: ⭐ {app.ratingAvg}</p>
          <p className="text-sm text-gray-700 flex items-center gap-1">
            <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
            {formatNumber(app.downloads)} Downloads
          </p>

          <p className="text-sm text-gray-700 flex items-center gap-1">
            <img src={reviewIcon} alt="Reviews" className="w-4 h-4" />
            {formatNumber(app.reviews)} Reviews
          </p>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 px-6 py-2 rounded text-white ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">App Review Breakdown</h2>
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
            <Bar dataKey="count" fill="#22C55E" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">App Description</h2>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
