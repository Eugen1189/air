import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './i18n/config'; // Initialize i18n
// Important: we no longer import index.css, it's not needed
import './main.scss'; // <--- THIS LINE MUST BE HERE

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
