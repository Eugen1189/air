import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Важливо: ми більше не імпортуємо index.css, він не потрібен
import './main.scss'; // <--- ЦЕЙ РЯДОК МАЄ БУТИ ТУТ

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
