import React from "react";
import { Link } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import { formatNumber } from "../utility/format";

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
        <p className="text-sm text-gray-700 flex items-center gap-1">
          <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
          {formatNumber(app.downloads)} Downloads
        </p>

        <p className="text-sm">Rating: ⭐ {app.ratingAvg}</p>
      </div>
    </Link>
  );
};

export default AppCard;
