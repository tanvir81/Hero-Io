import React, { useState, useEffect } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";
import errorImage from "../assets/App-Error.png";

const AllApps = () => {
  const { apps, loading, error } = useApps();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSearching(true);

    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
      setSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {loading && (
        <div className="flex justify-center my-6">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

      {!loading && filteredApps.length > 0 && (
        <>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Explore All Apps</h1>
            <p className="text-gray-600 mt-2">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <p className="text-xl font-bold text-gray-700">
              {filteredApps.length === 1
                ? "(1) App Found"
                : `(${filteredApps.length}) Apps Found`}
            </p>
            <input
              type="text"
              placeholder="Search apps by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border px-4 py-2 rounded w-full md:w-64 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </>
      )}

      {searching && (
        <div className="flex justify-center my-4">
          <span className="loading loading-spinner loading-md text-primary"></span>
        </div>
      )}

      {!loading &&
        !searching &&
        debouncedTerm.length >= 2 &&
        filteredApps.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center mt-10 space-y-6">
            <img
              src={errorImage}
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
            <button
              onClick={() => setSearchTerm("")}
              className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              Go Back!
            </button>
          </div>
        )}

      {!loading && !error && filteredApps.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}

      {error && <p className="text-center text-red-500">Error loading apps</p>}
    </div>
  );
};

export default AllApps;
