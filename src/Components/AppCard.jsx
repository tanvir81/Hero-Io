import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="block">
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="text-lg font-semibold mt-2">{app.title}</h3>
        <p className="text-sm text-gray-600">{app.companyName}</p>
        <p className="text-sm mt-1">
          Downloads: {app.downloads.toLocaleString()}
        </p>
        <p className="text-sm">Rating: ⭐ {app.ratingAvg}</p>
      </div>
    </Link>
  );
};

export default AppCard;
