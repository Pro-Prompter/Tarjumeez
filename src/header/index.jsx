import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const HERO_HEIGHT = 500;

export default function Navbar({ variant = "hero" }) {
  const [open, setOpen] = useState(false);
  const isSimple = variant === "simple";
  const [hidden, setHidden] = useState(!isSimple);
  const [pastHero, setPastHero] = useState(isSimple);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    lastScrollY.current = latest;

    const isPastHero = variant === "simple" || latest > HERO_HEIGHT;
    setPastHero(isPastHero);

    if (!isPastHero) {
      setHidden(true);
    } else if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  if (variant === "simple") {
    return (
      <motion.header
        className="simple-header"
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ position: "sticky", top: 0, zIndex: 50 }}
      >
        <Link
          to="/"
          className="nav-logo"
          style={{ textDecoration: "none", position: "relative", left: "auto" }}
        >
          <img
            src="/assets/images/Tarjumeez Voiceovers Logo.svg"
            alt="Tarjumeeez Voiceovers"
            className="nav-logo-svg"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#about" onClick={close}>
              About
            </a>
          </li>
          <li className="pipe">|</li>
          <li>
            <a href="#demo" onClick={close}>
              Demo
            </a>
          </li>
          <li className="pipe">|</li>
          <li>
            <a href="#clients" onClick={close}>
              Clients
            </a>
          </li>
          <li className="pipe">|</li>
          <li>
            <a href="#services" onClick={close}>
              Services
            </a>
          </li>
          <li className="pipe">|</li>
          <li>
            <a href="#contact" className="contact-link" onClick={close}>
              Contact
            </a>
          </li>
        </ul>
      </motion.header>
    );
  }

  return (
    <>
      {/* Hero navbar — absolute over hero image */}
      <nav className={`navbar${open ? " nav-open" : ""}`}>
        <Link
          to="/"
          className="nav-logo"
          style={{ textDecoration: "none" }}
          onClick={close}
        >
          <img
            src="/assets/images/Tarjumeez Voiceovers Logo.svg"
            alt="Tarjumeeez Voiceovers"
            className="nav-logo-svg nav-logo-svg--hero"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="#about" onClick={close}>
              About
            </Link>
          </li>
          <li className="pipe">|</li>
          <li>
            <Link to="#demo" onClick={close}>
              Demo
            </Link>
          </li>
          <li className="pipe">|</li>
          <li>
            <a href="#clients" onClick={close}>
              Clients
            </a>
          </li>
          <li className="pipe">|</li>
          <li>
            <a href="#services" onClick={close}>
              Services
            </a>
          </li>
          <li className="pipe">|</li>
          <li>
            <a href="#contact" className="contact-link" onClick={close}>
              Contact
            </a>
          </li>
        </ul>
        <button
          className="nav-hamburger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Sticky header — appears only after scrolling past hero */}
      <motion.div
        className="sticky-header"
        initial={{ y: "-100%" }}
        animate={{ y: pastHero && !hidden ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Link
          to="/"
          className="nav-logo"
          style={{ textDecoration: "none", position: "relative", left: "auto" }}
        >
          <img
            src="/assets/images/Tarjumeez Voiceovers Logo.svg"
            alt="Tarjumeeez Voiceovers"
            className="nav-logo-svg"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="pipe">|</li>
          <li>
            <a href="#demo">Demo</a>
          </li>
          <li className="pipe">|</li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li className="pipe">|</li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li className="pipe">|</li>
          <li>
            <a href="#contact" className="contact-link">
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
}
