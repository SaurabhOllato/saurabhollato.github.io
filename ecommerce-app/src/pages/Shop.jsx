import { useEffect, useState } from "react";
import ProductList from "./Products/ProductList";
import { resetFilters, setFilters } from "../feautures/filterslice";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const [tempCategories, setTempCategories] = useState([]);
  const [tempPrice, setTempPrice] = useState(1000);

  const dispatch = useDispatch();
  const { selectedCategories = [], priceRange = 1000 } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    // Sync Redux filter state into temp local state
    setTempCategories(selectedCategories);
    setTempPrice(priceRange);
  }, [selectedCategories, priceRange]);

  const handleCategoryChange = (category, checked) => {
    setTempCategories((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    );
  };

  const applyFilters = () => {
    dispatch(
      setFilters({
        selectedCategories: tempCategories,
        priceRange: tempPrice,
      })
    );
    localStorage.setItem(
      "filters",
      JSON.stringify({
        selectedCategories: tempCategories,
        priceRange: tempPrice,
      })
    );
  };

  const handleReset = () => {
    dispatch(resetFilters());
    setTempCategories([]);
    setTempPrice(1000);
    localStorage.removeItem("filters");
  };

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1  gap-8 relative">
        {/* Filters Sidebar - Enhanced */}
        <aside className="hidden md:block fixed top-24 left-4 w-[260px] bg-white p-6 rounded-lg shadow-lg h-fit z-10 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
            <button
              className="text-sm text-blue-600 hover:text-blue-800"
              onClick={handleReset}
            >
              Reset All
            </button>
          </div>

          {/* Category Filter - Enhanced */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h4 className="font-medium text-gray-900 mb-3 flex items-center justify-between">
              <span>Category</span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h4>
            <ul className="space-y-2">
              {["Earrings", "Necklace", "Bracelets", "Rings", "Anklets"].map(
                (category) => (
                  <li key={category} className="flex items-center">
                    <input
                      id={`category-${category}`}
                      type="checkbox"
                      checked={tempCategories.includes(category)}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-2"
                      onChange={(e) =>
                        handleCategoryChange(category, e.target.checked)
                      }
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="text-gray-700 text-sm cursor-pointer"
                    >
                      {category}
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Price Filter - Enhanced */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h4 className="font-medium text-gray-900 mb-4">Price Range</h4>
            <div className="px-1">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>₹100</span>
                <span>₹500</span>
                <span>₹1000+</span>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={tempPrice}
                onChange={(e) => setTempPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <span className="text-xs text-gray-500 mr-1">Min:</span>
                <span className="text-sm font-medium">₹100</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-gray-500 mr-1">Max:</span>
                <span className="text-sm font-medium">₹{tempPrice}</span>
              </div>
            </div>
          </div>

          {(tempCategories.length > 0 || tempPrice !== 1000) && (
            <p className="text-xs text-gray-500 mb-2">
              {tempCategories.length} categories selected, Max ₹{tempPrice}
            </p>
          )}

          <button
            onClick={applyFilters}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
          >
            Apply Filters
          </button>
        </aside>

        {/* Product Grid - Enhanced */}
        <div className="md:ml-[300px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Jewelry Collection
            </h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Sort by:</span>
              <select className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          <div className="">
            <ProductList
              selectedCategories={selectedCategories}
              maxPrice={priceRange}
            />
          </div>

          {/* Pagination - Added */}
          <div className="mt-10 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <button className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 border-t border-b border-gray-300 ${
                    page === 1
                      ? "bg-blue-50 text-blue-600 border-blue-200"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
