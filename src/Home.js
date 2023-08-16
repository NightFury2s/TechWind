import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar"
import Footer from "./components/footer";
import Slider from "./components/slide";
import Showcase from "./components/showcase";
import Nonloginbanner from "./components/nonloginbanner";
import LoginForm from "./pages/Login/login";
import SignupForm from "./pages/Signup/signup";
import Products from "./pages/Products/product";
import SingleProduct from "./components/singleProducts"
import Cart from "./components/cart";
import FeatureProduct from "./components/featureProduct";
import BlankProductlist from "./components/blankProductlist";
import { GlobalStyle } from "./GlobalStyle";

const Home = () => (
  <>
    <Slider />
    <Showcase />
    <Nonloginbanner />
    <FeatureProduct />
  </>
);

export default function Homepage() {
  return (
    <div className="">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/blankproduct" element={<BlankProductlist />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
