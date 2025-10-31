import React, { useEffect, useState } from "react";
import { getAllShoes } from "../api/ShoesApi";
import ShoeCard from "../components/ShoeCard";
import Loader from "../components/Loader";

export default function Home() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getAllShoes()
      .then((data) => {
        if (!mounted) return;
        setShoes(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, []);

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="text-center mt-8">
        <p className="text-red-500">
          Failed to load shoes. {error?.message || ""}
        </p>
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">All Shoes</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {shoes && shoes.length ? (
          shoes.map((shoe) => (
            <ShoeCard key={shoe.id || shoe._id || shoe.slug} shoe={shoe} />
          ))
        ) : (
          <p>No shoes found.</p>
        )}
      </div>
    </div>
  );
}
