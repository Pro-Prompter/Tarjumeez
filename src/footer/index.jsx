import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className="site-footer">
      <div className="footer-top-bar"></div>

      <div className="footer-body">
        <div className="footer-left">
          <div className="footer-logo">
            <img
              src="/assets/images/Tarjumeez Voiceovers Logo.svg"
              alt="Tarjumeeez Voiceovers"
              className="footer-logo-svg"
            />
          </div>
          <div className="footer-socials">
            <a href="#" className="footer-social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="footer-social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="footer-social-btn" aria-label="WeChat">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 3C5.36 3 2 5.92 2 9.5c0 1.95 1 3.7 2.6 4.9L4 17l2.8-1.4c.87.25 1.77.4 2.7.4.27 0 .53-.01.8-.03A5.6 5.6 0 0 1 10 14.5C10 11.46 13.13 9 17 9c.17 0 .34.01.5.02C16.7 5.57 13.42 3 9.5 3zm-1.75 3.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3.5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM17 10.5c-3.31 0-6 2.02-6 4.5s2.69 4.5 6 4.5c.73 0 1.42-.11 2.06-.3L22 21l-.54-2.4C22.44 17.6 23 16.1 23 14.5c0-2.48-2.69-4-6-4zm-1.5 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-contact-row">
            <a
              href="mailto:contact@tarjumeez.com"
              className="footer-contact-item"
            >
              contact@tarjumeez.com
            </a>
            <span className="footer-contact-item">+92 342 2702536</span>
            <span className="footer-contact-item">WeChat: salah2536</span>
          </div>
          <div className="footer-quicklinks-row">
            <div className="footer-ql-label">QUICK LINKS</div>
            {isHome ? (
              <a href="#home" className="footer-ql-link">
                Home
              </a>
            ) : (
              <Link to="/" className="footer-ql-link">
                Home
              </Link>
            )}
            <Link to="/demos" className="footer-ql-link">
              Portfolio
            </Link>
            <Link to="/about" className="footer-ql-link">
              About
            </Link>
            {isHome ? (
              <a href="#contact" className="footer-ql-link">
                Contact
              </a>
            ) : (
              <Link to="/#contact" className="footer-ql-link">
                Contact
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span className="footer-bottom-left">@tarjumeezvoiceovers</span>
        <span className="footer-bottom-right">@allrightsreserved2026</span>
      </div>
    </footer>
  );
}
