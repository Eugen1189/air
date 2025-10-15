import React from 'react';
import Logo from '../Logo/Logo';

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column footer-column--brand">
          <div className="footer-logo">
            <Logo variant="default" theme="dark" />
          </div>
          <p className="footer-tagline">
            Створюємо подорожі, що змінюють життя. Понад 10 років досвіду 
            в організації незабутніх турів по всьому світу.
          </p>
          <div className="footer-social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              📷 Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              👥 Facebook
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              ✈️ Telegram
            </a>
          </div>
        </div>

        <div className="footer-column footer-column--navigation">
          <h4 className="footer-column__title">Навігація</h4>
          <ul className="footer-links-list">
            <li><a href="/tours">Всі тури</a></li>
            <li><a href="/about">Про нас</a></li>
            <li><a href="/blog">Блог</a></li>
            <li><a href="/reviews">Відгуки</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contacts">Контакти</a></li>
          </ul>
        </div>

        <div className="footer-column footer-column--contact">
          <h4 className="footer-column__title">Зв'яжіться з нами</h4>
          <ul className="footer-links-list">
            <li>
              <a href="tel:+380991234567">📞 +38 (099) 123-45-67</a>
            </li>
            <li>
              <a href="tel:+380931234567">📞 +38 (093) 123-45-67</a>
            </li>
            <li>
              <a href="mailto:info@airtour.com">✉️ info@airtour.com</a>
            </li>
            <li>
              <p>📍 м. Київ, вул. Хрещатик, 1<br/>ТЦ "Глобус", офіс 203</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>&copy; {currentYear} Air Tour. Всі права захищено.</p>
        <p>
          <a href="/privacy">Політика конфіденційності</a>
          {' • '}
          <a href="/terms">Умови використання</a>
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;

