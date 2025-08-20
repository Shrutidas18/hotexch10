import React, { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
import Hero from "./Hero";
import Footer from "./Footer";
import GameCategories from "./GameCategories";
import Navbar from "./Navbar";
import Posters from "./Posters";

function App() {
  useEffect(() => {
    // Initialize Meta Pixel and track initial page view
    const options = { autoConfig: true, debug: false };
    ReactPixel.init("1269053948037640", undefined, options);
    ReactPixel.pageView();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Posters />
      <GameCategories />
      <Footer />
    </div>
  );
}

export default App;
