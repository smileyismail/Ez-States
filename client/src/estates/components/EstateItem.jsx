import React from "react";
import { Link } from "react-router-dom";

const EstateItem = (props) => {
  const { item } = props;

  return (
    <div className="rounded-md drop-shadow-2xl">
      <img src={item?.image} alt={item?.title} className="max-w-xs" />

      <div className="flex flex-wrap items-center justify-between p-2">
        <div className="w-1/2">
          <h1 className="text-xl font-semibold">{item?.title}</h1>
          <Link to={`/users/${item?.id}`}>
            <h4 className="text-sm text-neutral-800">{item?.seller}</h4>
          </Link>
        </div>
        <h1 className="text-lg font-medium">{item?.price} ₹</h1>
      </div>

      <button className="w-full bg-rose-600 p-2 text-center text-neutral-100 transition-all hover:bg-rose-500">
        View on Map
      </button>
    </div>
  );
};

export default EstateItem;
