import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
