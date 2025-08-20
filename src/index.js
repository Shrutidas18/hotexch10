import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactPixel from 'react-facebook-pixel';

// --------------------
// Initialize Meta Pixel for SPA
// --------------------
const options = { autoConfig: true, debug: false };
ReactPixel.init('1269053948037640', undefined, options); // Replace with your Pixel ID
ReactPixel.pageView(); // Track initial page load

// --------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
