import React, { useState, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofiles } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
    document.body.classList.toggle("ovhidden");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("ovhidden");
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/" onClick={closeMenu}>
            {logotext}
          </Link>

          <div className="d-flex align-items-center">
            <Themetoggle />

            <button
              className="menu__button nav_ac"
              onClick={handleToggle}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${isMenuOpen ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link to="/" className="my-3" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link to="/portfolio" className="my-3" onClick={closeMenu}>
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link to="/about" className="my-3" onClick={closeMenu}>
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link to="/contact" className="my-3" onClick={closeMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex gap-3">
              <a
                href={socialprofiles.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="fs-6 fs-md-5"
              >
                Facebook
              </a>
              <a
                href={socialprofiles.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="fs-6 fs-md-5"
              >
                Instagram
              </a>
              <a
                href={socialprofiles.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="fs-6 fs-md-5"
              >
                Twitter
              </a>
              <a
                href={socialprofiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="fs-6 fs-md-5"
              >
                LinkedIn
              </a>
            </div>

            <address className="mail m-0 fs-6 fs-md-5 text-center text-md-start">
              Get in Touch: <br className="d-none d-md-block" />
              <a href="mailto:contact@salahuddin.com" className="fs-6 fs-md-5">
                contact@salahuddin.com
              </a>
            </address>
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
