// src/Posters.js
import React from "react";
import "./Posters.css";

const Posters = () => {
  const posters = [
    "/poster1.jpg",
    "/poster2.jpg",
    "/poster3.jpg",
    "/poster4.jpg"
  ];

  return (
    <section className="posters">
      {posters.map((poster, index) => (
        <div key={index} className="poster-card">
          <img src={poster} alt={`Poster ${index + 1}`} />
        </div>
      ))}
    </section>
  );
};

export default Posters;
