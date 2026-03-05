import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Import App.css first
import './App.css';
// Then component CSS files
import './components/Header.css';
import './components/Hero.css';
import './components/Features.css';
import './components/Testimonials.css';
import './components/Pricing.css';
import './components/Footer.css';
import './components/Skeleton.css';
import './components/Cursor.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();