import React, { useState, useEffect } from "react";
import "./style.css";
import { logotext } from "../content_options";
import Themetoggle from "../components/themetoggle";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Headermain = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "portfolio", "about", "contact"];
    const visibleMap = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleMap[entry.target.id] = entry.isIntersecting;
        });

        for (const id of sectionIds) {
          if (visibleMap[id]) {
            setActiveSection(id);
            break;
          }
        }
      },
      { threshold: 0.3 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <a className="navbar-brand nav_ac" href="#home">
            {logotext}
          </a>

          <div className="d-flex align-items-center">
            <nav className="header__nav" aria-label="Main navigation">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <a
                    key={href}
                    href={href}
                    className={`header__nav-link${isActive ? " active" : ""}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
            <Themetoggle />
          </div>
        </div>
      </header>

      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
