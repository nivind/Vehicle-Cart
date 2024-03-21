import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Gallary from "./pages/Gallary";
import Contact from "./pages/Contact";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallary" element={<Gallary />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
