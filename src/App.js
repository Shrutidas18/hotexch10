import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import GameCategories from "./GameCategories";
import Navbar from "./Navbar";
import Posters from "./Posters";
function App() {
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
