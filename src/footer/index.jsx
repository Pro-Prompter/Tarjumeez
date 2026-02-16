import React from "react";
import "./style.css";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { logotext } from "../content_options";
import ScrollReveal from "../components/scrollreveal";

const Footer = () => {
  return (
    <footer className="site__footer">
      <div className="container">
        <div className="row">
          {/* Column 1: Brand */}
          <div className="col-lg-3 col-md-6 mb-4">
            <ScrollReveal animation="fade-up">
              <h4 className="footer__brand">{logotext}</h4>
              <p className="footer__tagline">
                Multilingual Translator &amp; Localization Specialist
              </p>
            </ScrollReveal>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <ScrollReveal animation="fade-up" delay={100}>
              <h5 className="footer__heading">Quick Links</h5>
              <ul className="footer__links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <ScrollReveal animation="fade-up" delay={200}>
              <h5 className="footer__heading">Get in Touch</h5>
              <ul className="footer__contact">
                <li>
                  {/* TODO: Replace with official email */}
                  <a href="mailto:contact@salahuddin.com">contact@salahuddin.com</a>
                </li>
                <li>
                  <a
                    href="https://wa.me/923435890171"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +92 343 5890171
                  </a>
                </li>
                <li>WeChat: salah2536</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Column 4: Connect */}
          <div className="col-lg-3 col-md-6 mb-4">
            <ScrollReveal animation="fade-up" delay={300}>
              <h5 className="footer__heading">Follow Me</h5>
              <div className="footer__social">
                <a
                  href="https://www.facebook.com/salah.uddin.526438"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/salahud_din_s"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/salahud-din-53765286"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/Ayubi4Ssa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom bar */}
        <ScrollReveal animation="fade">
          <div className="footer__bottom">
            <p>&copy; 2025 Salahud Din. All rights reserved.</p>
            <p>Designed &amp; Built by Sajawal Mirza</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
