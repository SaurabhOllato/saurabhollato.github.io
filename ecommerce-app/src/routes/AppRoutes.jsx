import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Shop from "../pages/Shop";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Cart from "../pages/Cart";
// import Login from "../pages/Login";
import { AnimatePresence } from "framer-motion";
import Shop from "../pages/Shop";
// import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import CheckoutPage from "../pages/Checkout";
import AuthPage from "../pages/Auth";
import About from "../pages/About";
import WishlistPage from "../pages/Whistlist";
import CollectionPage from "../pages/Collection";
import ContactPage from "../pages/Contact";
import Profile from "../pages/Profile";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/admin/Dashboard";
import AddProduct from "../pages/admin/AddProduct";
import ManageProducts from "../pages/admin/ManageProducts";
import { useLocation } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import ProductDetail from "../pages/Products/ProductDetail";

const AppRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id"  element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />


        {/* admin for smaller screen */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="manage-orders" element={<ManageProducts />} />

        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="*"
          element={<div className="p-4">404 - Page Not Found</div>}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
