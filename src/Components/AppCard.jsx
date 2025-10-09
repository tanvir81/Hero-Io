import React from "react";
import { Link } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import { formatNumber } from "../utility/format";
import ratingIcon from "../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="block">
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-00 object-contain
           rounded"
        />
        <div className="p-2">
          <div className="flex items-center justify-items-start mt-8">
            <h3 className="text-lg font-semibold ">{app.title}: </h3>
            <h3 className="text-lg font-semibold "> {app.companyName}</h3>
          </div>

          <div className="flex justify-between mt-8">
            <p className="w-18 px-1 py-1 rounded-[4px] bg-[#f1f5e8] text-sm text-green-400 font-semibold flex items-center gap-1">
              <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
              {formatNumber(app.downloads)}
            </p>

            <p className="text-lg flex  rounded-[4px] bg-[#FFF0E1] items-center px-3 py-1 gap-3 text-[#FF8811]">
              <img src={ratingIcon} alt="Rating" className="w-5 h-5" />
              {app.ratingAvg}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
