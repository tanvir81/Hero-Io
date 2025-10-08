import React from "react";
import Banner from "./Banner";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";

const Home = () => {
  const { apps, loading, error } = useApps();

  return (
    <div>
      <Banner />
      <h1 className="text-2xl font-bold text-center my-6">Trending Apps</h1>
      <p>Explore All Trending Apps on the Market developed by us</p>

      {loading && <p className="text-center">Loading apps...</p>}
      {error && <p className="text-center text-red-500">Error loading apps</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {apps.slice(0, 8).map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <Link
        to="/allapps"
        className="block text-center mt-6 text-blue-600 hover:underline font-medium"
      >
        Show All
      </Link>
    </div>
  );
};

export default Home;
