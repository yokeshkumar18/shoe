import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getShoeById } from "../api/ShoesApi";
import Loader from "../components/Loader";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shoe, setShoe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getShoeById(id)
      .then((data) => {
        if (!mounted) return;
        setShoe(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, [id]);

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="text-center mt-8">
        <p className="text-red-500">
          Failed to load product. {error?.message || ""}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    );

  if (!shoe) return <p>No product found.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={shoe.image || shoe.img || shoe.images?.[0]}
          alt={shoe.name || shoe.title}
          className="w-full md:w-1/2 object-contain"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{shoe.name || shoe.title}</h2>
          <p className="text-sm text-gray-500 mb-4">
            Brand: {shoe.brand || shoe.company || "Unknown"}
          </p>
          <p className="mb-4">
            {shoe.description || shoe.desc || "No description available."}
          </p>
          <div className="text-xl font-semibold mb-4">
            Price: {shoe.price ? `$${shoe.price}` : shoe.cost || "N/A"}
          </div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
