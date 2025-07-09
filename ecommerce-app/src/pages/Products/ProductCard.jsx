import { Heart, ShoppingCart } from "lucide-react";

import { addToCart } from "../../feautures/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../feautures/wishlistSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = () => {
    const isInCart = cartItems.find((i) => i._id === product._id);
    dispatch(addToCart(product));

    if (isInCart) {
      toast.info("✅ Quantity increased (already in cart)");
    } else {
      toast.success("🛒 Added to cart!");
    }
  };
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems?.some((item) => item._id === product._id);
  const handleWishlist = () => {
    if (!isInWishlist) {
      dispatch(addToWishlist(product));
      toast.success("💖 Added to wishlist");
    } else {
      toast.info("Already in wishlist");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 relative group">
      {/* Wishlist icon */}
      <button
        onClick={handleWishlist}
        className="absolute top-4 right-4 bg-white p-1 rounded-full shadow group-hover:scale-110 transition"
      >
        <Heart
          className={`w-5 h-5 ${
            isInWishlist ? "text-red-500 fill-red-500" : "text-gray-500"
          } hover:text-pink-600`}
          fill={isInWishlist ? "currentColor" : "none"} // fill only if in wishlist
        />
      </button>
     <Link to={`/product/${product._id}`} className="block">
      {/* Product Image */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 font-serif">
          {product.name}
        </h3>
        <p className="text-pink-600 font-medium mb-2 font-serif">₹{product.price}</p>
      </div>

      {/* Add to cart */}
      <button
        className="w-full flex items-center justify-center font-serif gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 rounded-lg transition"
        onClick={handleAddToCart}
      >
        <ShoppingCart className="w-5 h-5" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
