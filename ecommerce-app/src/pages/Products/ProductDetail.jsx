import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../feautures/cartActions";
import { addToWishlist } from "../../feautures/wishlistSlice";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";
import { addToCart } from "../../feautures/cartActions";
// import ProductCard from "../components/ProductCard";

const tabs = ["Description", "Specifications", "Shipping Info"];

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const isInCart = cartItems?.some((item) => item._id === product?._id);
  const isInWishlist = wishlistItems?.some((item) => item._id === product?._id);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/${id}`
        );
        setProduct(res.data);

        // Fetch related products based on category
        const relatedRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`
        );
        const filtered = relatedRes.data.filter(
          (p) => p._id !== res.data._id && p.category === res.data.category
        );
        setRelated(filtered);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center py-10">Loading product...</p>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(isInCart ? "✅ Quantity increased" : "🛒 Added to cart");
  };

  const handleWishlist = () => {
    if (isInWishlist) {
      toast.info("Already in wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("💖 Added to wishlist");
    }
  };



  return (
    <section className="max-w-6xl mx-auto  px-4 py-10 mt-20">
      <button
  onClick={() => navigate(-1)}
  className="px-4 py-2 mb-4 text-red-800  rounded hover:text-red-600 border border-red-200 bg-red-100 transition duration-300"
>
  ← Back
</button>

      {/* Main Product Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-[450px] object-cover rounded-lg shadow"
        />

        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.title}
          </h1>
          <p className="text-pink-600 font-semibold text-xl mb-2">
            ₹{product.price}
          </p>
          <p className="text-gray-600 mb-4">
            {product.description || "A beautiful piece of craftsmanship."}
          </p>

          <div className="flex items-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-sm text-gray-500">(24 reviews)</span>
          </div>

          {/* Cart and Wishlist Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
            >
              <ShoppingCart className="w-5 h-5" />
              {isInCart ? "In Cart" : "Add to Cart"}
            </button>

            <button
              onClick={handleWishlist}
              className={`flex items-center gap-2 border px-6 py-2 rounded ${
                isInWishlist
                  ? "border-red-500 text-red-500"
                  : "border-gray-400 text-gray-600"
              }`}
            >
              <Heart className="w-5 h-5" />
              {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
            </button>
          </div>
          {/* Tabs Section */}
          <div className="mt-12">
            <div className="flex gap-4 border-b pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm px-4 py-2 ${
                    activeTab === tab
                      ? "border-b-2 border-pink-600 text-pink-600 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6 text-gray-700 text-sm leading-relaxed">
              {activeTab === "Description" && (
                <p>{product.description || "No description available."}</p>
              )}
              {activeTab === "Specifications" && (
                <ul className="list-disc pl-6">
                  <li>Material: Rose Gold Plated</li>
                  <li>Weight: 120g</li>
                  <li>Length: Adjustable chain</li>
                  <li>Brand: Fashion Craze</li>
                </ul>
              )}
              {activeTab === "Shipping Info" && (
                <p>
                  We deliver across India in 3–7 business days. All items are
                  packed securely with return options available within 7 days of
                  delivery.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetailPage;
