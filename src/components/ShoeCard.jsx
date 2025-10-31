import React from "react";
import { Link } from "react-router-dom";

export default function ShoeCard({ shoe }) {
  const id = shoe.id || shoe._id || shoe.slug || shoe.key || "";
  const img = shoe.image || shoe.img || shoe.images?.[0];
  const name = shoe.name || shoe.title;
  const price = shoe.price || shoe.cost || shoe.priceUSD;

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition-shadow overflow-hidden">
      <div className="h-56 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
        <img src={img} alt={name} className="max-h-48 object-contain" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <div className="text-blue-600 font-bold mb-3">
          {price ? `$${price}` : "Price N/A"}
        </div>
        <Link
          to={`/product/${id}`}
          className="inline-block px-3 py-2 bg-blue-600 text-white rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
