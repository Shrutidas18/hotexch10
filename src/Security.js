import React from "react";
import "./Security.css";

function Security() {
  return (
    <section className="security">
      <div className="security-container">
        <p className="security-text">
          Your transactions are <strong>100% Secure</strong> with trusted partners
        </p>
        <div className="security-logos">
          <img src="/images/truste.png" alt="TRUSTe" />
          <img src="/images/mcafee.png" alt="McAfee Secure" />
          <img src="/images/sitelock.png" alt="SiteLock Verified" />
          <img src="/images/ssl.png" alt="SSL Secure" />
        </div>
      </div>
    </section>
  );
}

export default Security;
