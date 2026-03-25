import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../header";
import WaveformPlayer from "./WaveformPlayer";

const DEMO_PLAYERS = [
  { src: "/assets/audios/Demo_Renan.mp3", label: "Demo Renan" },
  { src: "/assets/audios/Roleplay (Urdu).mp3", label: "Roleplay (Urdu)" },
  { src: "/assets/audios/Talaat Audio Test.mp3", label: "Talaat Audio Test" },
  { src: "/assets/audios/URDU IVR.mp3", label: "URDU IVR" },
  { src: "/assets/audios/محادثة عادية.mp3", label: "\u0645\u062D\u0627\u062F\u062B\u0629 \u0639\u0627\u062F\u064A\u0629" },
  { src: "/assets/audios/demo1.wav", label: "Demo 1" },
  { src: "/assets/audios/demo2.wav", label: "Demo 2" },
];

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const scaleDivider = {
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function DemosPage() {
  useEffect(() => {
    document.body.classList.add("page-demos");
    return () => document.body.classList.remove("page-demos");
  }, []);

  const rows = [];
  for (let i = 0; i < DEMO_PLAYERS.length; i += 2) {
    rows.push(DEMO_PLAYERS.slice(i, i + 2));
  }

  return (
    <>
      <Navbar variant="simple" />

      <main style={{ padding: "90px 40px 120px", textAlign: "center" }}>
        <section id="demos-full" className="demos-section">
          <motion.h1 className="demos-heading" {...fadeIn}>Portfolio</motion.h1>

          <div className="demos-grid" style={{ maxWidth: "920px", margin: "0 auto" }}>
            {rows.map((row, ri) => (
              <React.Fragment key={ri}>
                {ri > 0 && <motion.hr className="demos-divider" {...scaleDivider} style={{ transformOrigin: "center" }} />}
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

          <div className="demos-btn-wrap" style={{ marginTop: "32px" }}>
            <div className="demos-btn-underline"></div>
          </div>
        </section>
      </main>
    </>
  );
}
