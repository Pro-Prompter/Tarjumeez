import React from "react";
import "./style.css";
import Typewriter from "typewriter-effect";
import { introdata } from "../../content_options";
import ScrollReveal from "../../components/scrollreveal";

export const Home = () => {
  return (
    <section id="home" className="home">
      <div className="intro_sec d-block d-lg-flex align-items-center">
        <div className="h_bg-image order-1 order-lg-2 h-100 d-flex align-items-center justify-content-center">
          <ScrollReveal animation="scale" delay={200}>
            <img
              src={introdata.your_img_url}
              alt="Salahud Din"
              className="profile-image-circular"
            />
          </ScrollReveal>
        </div>

        <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
          <div className="align-self-center">
            <div className="intro mx-auto">
              <ScrollReveal animation="fade-up">
                <h2 className="mb-1x">{introdata.title}</h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={150}>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <p className="mb-1x">{introdata.description}</p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={450}>
                <div className="intro_btn-action pb-5">
                  <a href="#portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      My Portfolio
                      <div className="ring one" />
                      <div className="ring two" />
                      <div className="ring three" />
                    </div>
                  </a>

                  <a href="#contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one" />
                      <div className="ring two" />
                      <div className="ring three" />
                    </div>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
