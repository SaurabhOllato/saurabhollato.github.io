import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ selectedCategories = [], maxPrice = 1000 }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`
        );
        setProducts(res.data);
      } catch (err) {
        console.log("Failed to fetch:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  // 🔍 Apply filters here
  const filtered = products.filter(
    (p) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(p.category)) &&
      p.price <= maxPrice
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found.
        </p>
      )}
    </div>
  );
};

export default ProductList;
