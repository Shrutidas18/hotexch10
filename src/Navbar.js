import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setHidden(true);
      } else {
        // scrolling up → show navbar
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
      {/* Left side - Sign In */}
      <a
        href="https://hotexch10.com/sports/?ref=ZjU2MDQ2MjE="
        target="_blank"
        rel="noopener noreferrer"
        className="nav-btn left-btn"
      >
        Sign In
      </a>

      {/* Right side - Log In */}
      <a
        href="https://hotexch10.com/sports/?ref=ZjU2MDQ2MjE="
        target="_blank"
        rel="noopener noreferrer"
        className="nav-btn right-btn"
      >
        Log In
      </a>
    </nav>
  );
}
