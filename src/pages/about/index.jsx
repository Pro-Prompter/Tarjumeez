import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../header";

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

export default function AboutPage() {
  return (
    <>
      <Navbar variant="simple" />

      <main>
        <motion.h1 className="page-heading" {...fadeIn}>ABOUT</motion.h1>
        <section className="about-section about-me-section">
          <div className="page-container about-body">
            <motion.h2 {...fadeIn}>Professional Profile</motion.h2>
            <motion.p {...slideUp}>
              Dr. Salahud Din is a multilingual voice artist and language specialist with over 12 years of experience in broadcast and commercial narration, audiobook performance, e-learning narration, and translation/localization services. He holds advanced training in vocal technique, diction, and studio production workflows.
            </motion.p>

            <motion.h3 {...fadeIn}>Core strengths</motion.h3>
            <motion.ul {...slideUp}>
              <li>Clear, authoritative delivery for narration &amp; documentary work</li>
              <li>Warm, friendly commercial reads optimized for radio and digital ads</li>
              <li>Experienced in Arabic, Urdu, Pashto and English — accurate accents and cultural nuance</li>
              <li>Home studio capable of delivering broadcast-ready files (48kHz / 24-bit)</li>
            </motion.ul>

            <motion.h3 style={{ marginTop: "18px" }} {...fadeIn}>How I work</motion.h3>
            <motion.p {...slideUp}>
              I provide clear project timelines, sample reads on request, and professional post-production (noise reduction, normalization, and delivery in required formats). Revisions and direction are handled collaboratively until the final mix meets client objectives.
            </motion.p>

            <div style={{ display: "flex", gap: "28px", marginTop: "18px", flexWrap: "wrap" }}>
              <motion.div style={{ flex: 1, minWidth: "220px" }} {...slideUp}>
                <strong>Languages</strong>
                <ul>
                  <li>Urdu (native)</li>
                  <li>Pashto (near-native)</li>
                  <li>Arabic (professional)</li>
                  <li>English (fluent)</li>
                </ul>
              </motion.div>
              <motion.div style={{ flex: 1, minWidth: "220px" }} {...slideUp} transition={{ duration: 0.6, delay: 0.15 }}>
                <strong>Studio / Deliverables</strong>
                <ul>
                  <li>Quiet home studio, condenser mic</li>
                  <li>Deliver WAV/MP3, 48kHz/24-bit, duplicates, dry/wet versions</li>
                  <li>Optional editing &amp; mastering</li>
                </ul>
              </motion.div>
            </div>

            <div style={{ marginTop: "26px" }}>
              <Link className="about-more-btn" to="/#contact">Request a quote</Link>
            </div>
          </div>
        </section>
        <div className="page-bottom-bar" aria-hidden="true"></div>
      </main>
    </>
  );
}
