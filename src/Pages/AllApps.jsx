import React, { useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";

const AllApps = () => {
  const { apps, loading, error } = useApps();
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearching(true);

    setTimeout(() => {
      setSearching(false);
    }, 500);
  };

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {loading && (
        <div className="flex justify-center my-6">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Explore All Apps</h1>
        <p className="text-gray-600 mt-2">
          Browse our full collection of trending and useful applications
        </p>
      </div>

      {/* Search and States */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-sm text-gray-700">
          Total Apps: <span className="font-semibold">{apps.length}</span>
        </p>
        <input
          type="text"
          placeholder="Search apps by title..."
          value={searchTerm}
          onChange={handleSearch}
          className="border px-4 py-2 rounded w-full md:w-64 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* 🔄 Loader During Search */}
      {searching && (
        <div className="flex justify-center my-4">
          <span className="loading loading-spinner loading-md text-primary"></span>
        </div>
      )}

      {!loading && !searching && filteredApps.length === 0 && (
        <p className="text-center text-gray-500">No App Found</p>
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
