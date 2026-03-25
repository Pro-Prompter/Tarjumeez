import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Navbar from "../../header";
import Footer from "../../footer";
import Contact from "../contact";
import WaveformPlayer from "../portfolio/WaveformPlayer";

const DEMO_PLAYERS = [
  { src: "/assets/audios/Demo_Renan.mp3", label: "Demo Renan" },
  { src: "/assets/audios/Roleplay (Urdu).mp3", label: "Roleplay (Urdu)" },
  { src: "/assets/audios/Talaat Audio Test.mp3", label: "Talaat Audio Test" },
  { src: "/assets/audios/URDU IVR.mp3", label: "URDU IVR" },
  {
    src: "/assets/audios/محادثة عادية.mp3",
    label:
      "\u0645\u062D\u0627\u062F\u062B\u0629 \u0639\u0627\u062F\u064A\u0629",
  },
  { src: "/assets/audios/demo1.wav", label: "Demo 1" },
  { src: "/assets/audios/demo2.wav", label: "Demo 2" },
];

const SERVICES = [
  {
    title: "Commercial Voice Over",
    body: "Professional voice overs for radio, TV, online ads, and branded content with a polished, engaging delivery.",
    side: "left",
  },
  {
    title: "Narration & Documentaries",
    body: "Clear, natural, and authoritative narration for documentaries, explainer videos, and storytelling projects.",
    side: "right",
  },
  {
    title: "E-Learning & Corporate Voice",
    body: "Professional narration for training modules, presentations, and corporate communications.",
    side: "left",
  },
  {
    title: "Audiobooks",
    body: "Consistent, expressive narration for fiction and non-fiction audiobooks with studio-quality sound.",
    side: "right",
  },
];

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};
const slideUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};
const scaleDivider = {
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// Direction-aware motion for services
const slideLeft = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};
const slideRight = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function ChevronArrow({ bg = "#fff" }) {
  return (
    <div
      style={{
        background: bg,
        textAlign: "center",
        lineHeight: 0,
        fontSize: 0,
        padding: 0,
        margin: 0,
      }}
    >
      <svg
        width="46"
        height="24"
        viewBox="0 0 46 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 46,0 23,24" fill="#727272" />
      </svg>
    </div>
  );
}

export default function HomePage() {
  const rows = [];
  for (let i = 0; i < DEMO_PLAYERS.length; i += 2)
    rows.push(DEMO_PLAYERS.slice(i, i + 2));

  return (
    <>
      {/* HERO */}
      <div id="home" className="hero-wrapper">
        <img
          className="hero-bg"
          src="/assets/images/drsalahuddin.png"
          alt="Dr. Salahud Din"
        />
        <div className="hero-overlay"></div>

        <Navbar variant="hero" />

        <div className="hero-content">
          <span className="hero-meet">Meet</span>
          <h1 className="hero-name">
            <Typewriter
              options={{
                strings: ["Dr. Salahud Din"],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <p className="hero-role">professional voiceover artist.</p>
          <p className="hero-trusted">
            Trusted by <span className="teal-num">100+</span> global clients
          </p>
          <div className="hero-langs">
            <span className="hero-lang hero-lang-urdu">
              {"\u0627\u0631\u062F\u0648"}
            </span>
            <span
              className="hero-lang"
              style={{ padding: "5px", fontWeight: 700 }}
            >
              English
            </span>
            <span className="hero-lang hero-lang-pashto">
              {"\u067E\u069A\u062A\u0648"}
            </span>
            <span className="hero-lang">{"\u0639\u0631\u0628\u064A"}</span>
          </div>
        </div>

        <div className="hero-foot">
          <span className="hero-teal-bar"></span>
        </div>
      </div>

      <ChevronArrow bg="#fff" />

      {/* ABOUT ME */}
      <div id="about" className="about-section">
        <motion.h2 className="about-heading" {...fadeIn}>
          Brief About Me
        </motion.h2>
        <div className="about-body">
          <motion.p className="about-para" {...slideUp}>
            I am a professional multilingual language specialist providing
            high-quality
            <br />
            voice-over and translation services in{" "}
            <strong>Urdu, Pashto, and Arabic</strong>.
          </motion.p>
          <motion.p
            className="about-para"
            {...slideUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            By blending linguistic precision with cultural authenticity, I
            deliver
            <br />
            expressive recordings and localized translations tailored for
            <br />
            commercials, corporate narration, e-learning, and diverse digital
            content.
          </motion.p>
          <motion.hr
            className="about-divider"
            {...scaleDivider}
            style={{ transformOrigin: "center" }}
          />
          <motion.p className="about-para" {...slideUp}>
            With a strong background in QA support and multilingual
            communication,
            <span className="about-highlight">
              I ensure every project is polished, accurate, and audience-focused
            </span>
          </motion.p>
          <motion.p
            className="about-para"
            {...slideUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Whether you need a clear, natural voice or a nuanced translation
            that preserves
            <br />
            your original intent, I am a dependable partner committed
            <br />
            to delivering professional, publication-ready results on schedule.
          </motion.p>
          <div className="about-btn-wrap">
            <Link to="/about" className="about-more-btn">
              MORE
            </Link>
            <div className="about-btn-underline"></div>
          </div>
        </div>
      </div>

      <motion.span
        className="about-teal-bar"
        {...scaleDivider}
        style={{ transformOrigin: "center" }}
      />
      <ChevronArrow bg="#edf1f2" />

      {/* DEMOS */}
      <div id="demo" className="demos-section">
        <motion.h2 className="demos-heading" {...fadeIn}>
          DEMO{"\u2019"}s
        </motion.h2>
        <div className="demos-grid">
          {rows.map((row, ri) => (
            <React.Fragment key={ri}>
              {ri > 0 && (
                <motion.hr
                  className="demos-divider"
                  {...scaleDivider}
                  style={{ transformOrigin: "center" }}
                />
              )}
              <div className="demos-row">
                {row.map((demo, ci) => (
                  <WaveformPlayer
                    key={ri * 2 + ci}
                    url={demo.src}
                    label={demo.label}
                  />
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="demos-btn-wrap">
          <Link to="/demos" className="demos-more-btn">
            MORE
          </Link>
          <div className="demos-btn-underline"></div>
        </div>
      </div>

      {/* CLIENTS */}
      <section id="clients" className="clients-section">
        <motion.h2 className="clients-heading" {...fadeIn}>
          CLIENTS
        </motion.h2>
        <div className="clients-logos">
          <div className="clients-logo clients-logo--sm">
            <img
              src="/assets/images/certification_badge.svg"
              alt="Client badge"
            />
          </div>
          <div className="clients-logo clients-logo--md">
            <img
              src="/assets/images/certification_badge.svg"
              alt="Client badge"
            />
          </div>
          <div className="clients-logo clients-logo--lg">
            <img
              src="/assets/images/certification_badge.svg"
              alt="Client badge"
            />
          </div>
          <div className="clients-logo clients-logo--md">
            <img
              src="/assets/images/certification_badge.svg"
              alt="Client badge"
            />
          </div>
          <div className="clients-logo clients-logo--sm">
            <img
              src="/assets/images/certification_badge.svg"
              alt="Client badge"
            />
          </div>
        </div>
        <div className="reviews-block">
          <motion.h3 className="reviews-heading" {...fadeIn}>
            - REVIEWS -
          </motion.h3>
          <motion.p className="reviews-text" {...slideUp}>
            Salahud Din provided high-quality Urdu and Pashto translation and
            review
            <br />
            services for our bilingual children{"\u2019"}s book content.
            <br />
            His work was accurate, culturally appropriate, and professionally
            delivered.
            <br />
            We are very satisfied with his services and would gladly recommend
            him for multilingual projects.
          </motion.p>
          <motion.div
            className="reviews-underline"
            {...scaleDivider}
            style={{ transformOrigin: "center" }}
          />
        </div>
      </section>

      <motion.span
        className="clients-teal-bar"
        {...scaleDivider}
        style={{ transformOrigin: "center" }}
      />
      <ChevronArrow bg="#edf1f2" />

      {/* SERVICES */}
      <section id="services" className="services-section">
        <motion.h2 className="services-heading" {...fadeIn}>
          SERVICES
        </motion.h2>
        <div className="services-list">
          {SERVICES.map((svc, i) => {
            // Direction-aware
            const slideMotion =
              svc.side === "left"
                ? {
                    initial: { opacity: 0, x: -80 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                  }
                : {
                    initial: { opacity: 0, x: 80 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                  };

            return (
              <motion.div
                key={i}
                className={`services-row services-row--${svc.side}`}
                {...slideMotion}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div className="services-card">
                  <h3 className="services-card-title">{svc.title}</h3>
                  <p className="services-card-body">{svc.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
