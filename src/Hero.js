import React from "react";
import ReactPixel from "react-facebook-pixel";
import "./Hero.css";

export default function Hero() {
  const highlightVideos = [
    { title: "Cricket", src: "/Cricket.mp4" },
    { title: "Casino", src: "/casino.mp4" },
    { title: "Tennis", src: "/tennis.mp4" },
    { title: "Slots", src: "/Slot.mp4" },
  ];

  const redirectUrl = "https://hotexch10.com/sports/?ref=ZjU2MDQ2MjE=";

  const handleClick = (title) => {
    // Track the click in Meta Pixel
    ReactPixel.track("VideoBoxClick", { video: title });
    // Redirect to the external URL
    window.open(redirectUrl, "_blank");
  };

  return (
    <section className="hero">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-bg">
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>
          Your Ultimate <span className="highlight">Betting Arena</span>
        </h1>
        <p>Play Live Casino, Cricket, Tennis & More. Win Real Rewards.</p>

        {/* Promo Banner */}
        <div className="promo-banner">
          🎁 100% Welcome Bonus on First Deposit ⚡ Limited Time!
        </div>

        <a href={redirectUrl} className="cta-button" target="_blank" rel="noopener noreferrer">
          Enter Now
        </a>
      </div>

      {/* Highlight Boxes */}
      <div className="highlight-boxes">
        {highlightVideos.map((video, index) => (
          <div
            key={index}
            className="highlight-card"
            onClick={() => handleClick(video.title)}
            style={{ cursor: "pointer" }}
          >
            <video autoPlay loop muted playsInline className="highlight-video">
              <source src={video.src} type="video/mp4" />
            </video>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
