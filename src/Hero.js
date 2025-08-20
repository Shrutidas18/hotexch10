import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-bg">
        <source src="/casino-bg.mp4" type="video/mp4" />
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

        <a
          href="https://hotexch10.com/sports/?ref=ZjU2MDQ2MjE="
          className="cta-button"
        >
          Enter Now
        </a>
      </div>

      {/* Highlight Boxes */}
      <div className="highlight-boxes">
        <div className="highlight-card">
          <video autoPlay loop muted playsInline className="highlight-video">
            <source src="/Cricket.mp4" type="video/mp4" />
          </video>
          <h3>Cricket</h3>
        </div>

        <div className="highlight-card">
          <video autoPlay loop muted playsInline className="highlight-video">
            <source src="/casino.mp4" type="video/mp4" />
          </video>
          <h3>Casino</h3>
        </div>

        <div className="highlight-card">
          <video autoPlay loop muted playsInline className="highlight-video">
            <source src="/tennis.mp4" type="video/mp4" />
          </video>
          <h3>Tennis</h3>
        </div>

        <div className="highlight-card">
          <video autoPlay loop muted playsInline className="highlight-video">
            <source src="/Slot.mp4" type="video/mp4" />
          </video>
          <h3>Slots</h3>
        </div>
      </div>
    </section>
  );
}
