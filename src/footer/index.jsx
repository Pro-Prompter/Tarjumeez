import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

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
              alt="Tarjumeez Voiceovers"
              className="footer-logo-svg"
            />
          </div>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/salah.uddin.526438"
              className="footer-social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/salahud_din_s"
              className="footer-social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/salahud-din-53765286"
              className="footer-social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Ayubi4Ssa"
              className="footer-social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
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
            <a
              href="https://wa.me/923422702536"
              className="footer-contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              +92 342 2702536
            </a>
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
