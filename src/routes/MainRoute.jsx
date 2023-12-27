import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Collection from "../pages/Collection";
import Footer from "../components/footer/Footer";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MainRoute;
