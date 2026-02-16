import React from "react";
import { Helmet } from "react-helmet-async";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { About } from "../pages/about";
import { ContactUs } from "../pages/contact";
import { Socialicons } from "../components/socialicons";
import Footer from "../footer";
import { meta } from "../content_options";

function AppRoutes() {
  return (
    <div className="s_c">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <main role="main">
        <Home />
        <Portfolio />
        <About />
        <ContactUs />
      </main>
      <Footer />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;