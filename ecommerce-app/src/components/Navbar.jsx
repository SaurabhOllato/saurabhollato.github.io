import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Heart,
  Search,
  User,
  ShoppingCart,
  Menu,
  ChevronDown,
  Package,
  Settings,
  LogOut,
  LogIn,
} from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo2.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../feautures/authslice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showSearch, setShowSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.auth.user);

  const navClasses = `fixed left-0 w-full top-0 z-50 transition-all duration-300 ${
    isHome
      ? isScrolled
        ? "bg-white shadow-lg py-2"
        : "bg-transparent backdrop-blur-sm py-3"
      : "bg-white py-2 shadow-md"
  }`;

  useEffect(() => {
    if (location.pathname !== "/") return; // Disable on other pages

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // useEffect(() => {
  //   setIsMobileMenuOpen(false); // Close mobile menu on route change
  // }, [location]);

  // useEffect(() => {
  //   let ticking = false;

  //   const handleScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(() => {
  //         setIsScrolled(window.scrollY > 200  );
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collection" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    // { name: "Admin", path: "/admin" },
  ];
  //  cart count using redux
  const cartCount = useSelector((state) => state.cart.cartItems.length);

  const wishlistCount = useSelector(
    (state) => state.wishlist?.wishlistItems?.length || 0
  );

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative flex items-center justify-between transition-all duration-300 ease-in-out px-4 ${
            isScrolled ? "h-12" : "h-16"
          }`}
        >
          {/* Hamburger menu for mobile */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Logo - centered on mobile, left on desktop */}
          <div className="flex items-center lg:absolute lg:left-4">
            <Link
              to="/"
              className="flex items-center gap-2 group"
              aria-label="Home"
            >
              <img
                src={logo}
                className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className={`hidden text-xl font-bold ${
                  isScrolled ? "text-black" : "text-logoText"
                }`}
              >
                Fashion Craze
              </span>
            </Link>
          </div>

          {/* Centered navigation - hidden on mobile */}
          <div className="hidden lg:flex mx-auto items-center space-x-6">
            {navLinks.map((link) =>
              link.class === "hidden" ? null : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-1 py-2 text-sm font-medium  transition-colors relative ${
                    location.pathname === link.path
                      ? isScrolled
                        ? "text-black"
                        : "text-subtext"
                      : isScrolled
                      ? "text-black hover:text-black/80"
                      : "text-subtext hover:text-accent"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full ${
                        isScrolled ? "bg-black" : "bg-accent"
                      }`}
                    ></span>
                  )}
                </Link>
              )
            )}
          </div>

          {/* Icons on the right */}
          <div className="flex items-center gap-5 ">
            {/* Search Bar (conditionally shown) */}
            {showSearch && (
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="ml-4 pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all w-64"
                />
                <Search className="h-4 w-4 absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            )}

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="p-2 relative group rounded-full hover:bg-gray-50 transition-colors"
            >
              <Heart
                className={`h-5 w-5  group-hover:text-pink-600 transition-colors ${
                  isScrolled ? "text-black" : "text-subtext"
                }`}
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center min-w-[20px] h-5 shadow-sm">
                  {wishlistCount}
                </span>
              )}
              <span className="absolute inset-0 scale-75 bg-pink-100 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all -z-10"></span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="p-2 relative group rounded-full hover:bg-gray-50 transition-colors"
            >
              <ShoppingCart
                className={`h-5 w-5  group-hover:text-pink-600 transition-colors ${
                  isScrolled ? "text-black" : "text-subtext"
                }`}
              />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center min-w-[20px] h-5 shadow-sm">
                  {cartCount}
                </span>
              )}
              <span className="absolute inset-0 scale-75 bg-pink-100 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all -z-10"></span>
            </Link>

            {/* User Menu Dropdown */}
            <div className="hidden lg:flex items-center gap-4">
              {user ? (
                <div className="relative group">
                  <button
                    className="flex items-center gap-2 font-medium hover:text-pink-600 transition-colors"
                    aria-haspopup="true"
                  >
                    <span
                      className={` hidden xl:inline-block text-sm group-hover:text-pink-600 transition-colors ${
                        isScrolled ? "text-black" : "text-subtext"
                      }`}
                    >
                      {/* Hi, {user.name.split(" ")[0]} */}
                      {user && user.name
                        ? `Hi, ${user.name.split(" ")[0]}`
                        : "Hi"}
                    </span>
                    <ChevronDown className="h-4 w-4 hidden xl:inline-block transition-transform group-hover:rotate-180 text-subtext" />
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                        {/* {user.name.charAt(0).toUpperCase()} */}
                        {user?.name?.charAt(0)?.toUpperCase() || ""}
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                  </button>

                  <div className="absolute right-0 hidden group-hover:block bg-white shadow-xl rounded-lg mt-2 w-56 p-2 z-50 border border-gray-100 animate-fade-in">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.phone || "No phone number"}
                      </p>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                    >
                      <User className="h-4 w-4 mr-3" />
                      My Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                    >
                      <Package className="h-4 w-4 mr-3" />
                      My Orders
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors"
                    >
                      <Settings className="h-4 w-4 mr-3" />
                      Account Settings
                    </Link>
                    <div className="px-4 py-2.5 border-t border-gray-100">
                      <button
                        onClick={() => dispatch(logoutUser())}
                        className="flex items-center w-full text-left text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 px-2 py-1.5 rounded-lg transition-colors"
                      >
                        <LogOut className="h-4 w-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-black"
                    : "text-gray-700 hover:bg-primary/10 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-5 flex items-center justify-between">
            <div className="flex space-x-4">
              <Link
                to="/search"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-black"
              >
                <Search className="h-5 w-5" />
              </Link>
              <Link
                to="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-black"
              >
                <Heart className="h-5 w-5" />
              </Link>
              <Link
                to="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-black"
              >
                <User className="h-5 w-5" />
              </Link>
            </div>
            <Link
              to="/cart"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:text-black relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-buttonText text-xs px-1.5 py-0.5 rounded-full">
                2
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
