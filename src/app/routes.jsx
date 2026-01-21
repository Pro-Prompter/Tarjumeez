import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    pageRef.current?.focus();
  }, [location.pathname]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        timeout={400}
        classNames="page"
        unmountOnExit
      >
        <main
          ref={pageRef}
          tabIndex={-1}
          role="main"
          aria-live="polite"
          className="page-wrapper"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </CSSTransition>
    </TransitionGroup>
  );
});

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;