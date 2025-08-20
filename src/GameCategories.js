import React from "react";
import "./GameCategories.css";

const GameCategories = () => {
  const categories = [
    { name: "Playtech Exclusive", img: "playtech.jpeg", bet: "₹200/-" },
    { name: "Ezugi", img: "/ezugi.png", bet: "₹100/-" },
    { name: "Evolution", img: "/evolution.jpg", bet: "₹10/-" },
    { name: "Playtech", img: "/playtech.jpeg", bet: "₹10/-" },
    { name: "AE Sexy", img: "/aesexy.png", bet: "₹40/-" },
    { name: "Winfinity", img: "/winfinity.jpeg", bet: "₹25/-" },
    { name: "Skyward", img: "/skyward.jpeg", bet: "₹10/-" },
    { name: "Royal Gaming", img: "/royalgaming.jpeg", bet: "₹100/-" },
    { name: "Fugaso", img: "/fugaso.jpeg", bet: "₹150/-" },
    { name: "Kingmaker", img: "/kingmaker.jpeg", bet: "₹50/-" },
    { name: "OneTouch", img: "/onetouch.jpeg", bet: "₹100/-" },
    { name: "JILI", img: "/jili.jpeg", bet: "₹150/-" },
  ];

  const gameLink = "https://hotexch10.com/sports/?ref=ZjU2MDQ2MjE=";

  return (
    <section className="categories-section">
      <h2 className="categories-heading">Game Categories</h2>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.img} alt={cat.name} className="category-img" />
            <div className="overlay">
              <h3>{cat.name}</h3>
              <p>Bet Start {cat.bet}</p>
              <a
                href={gameLink}
                target="_blank"
                rel="noopener noreferrer"
                className="play-btn"
              >
                Play
              </a>
            </div>
          </div>
        ))}

        {/* Much More card */}
        <div className="category-card more-card">
          <div className="overlay">
            <h3>+ Much More</h3>
            <a
              href={gameLink}
              target="_blank"
              rel="noopener noreferrer"
              className="play-btn"
            >
              Play
            </a>
          </div>
        </div>
      </div>

      {/* Link to WordPress site */}
      <a
        href={gameLink}
        target="_blank"
        rel="noopener noreferrer"
        className="explore-btn"
      >
        Explore All Games
      </a>
    </section>
  );
};

export default GameCategories;
