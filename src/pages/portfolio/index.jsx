import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { dataportfolio } from "../../content_options";
import Player from "./Player";
import ScrollReveal from "../../components/scrollreveal";

export const Portfolio = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [theme, setTheme] = useState("dark"); // Default to dark

  useEffect(() => {
    // Initial check
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);

    // Observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setTheme(document.documentElement.getAttribute('data-theme'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const handlePlayToggle = (index) => {
    if (currentlyPlaying === index) {
      setCurrentlyPlaying(null); // Pause if clicking same
    } else {
      setCurrentlyPlaying(index); // Play new
    }
  };

  return (
    <section id="portfolio">
      <Container className="About-header">
        <ScrollReveal animation="fade-up">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Voice Demos </h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
        </ScrollReveal>
        <Row className="mb-5 justify-content-center">
          {dataportfolio.map((data, i) => {
            return (
              <Col key={i} lg="6" md="12" className="mb-4">
                <ScrollReveal animation="fade-up" delay={i * 120}>
                  <Card className="h-100 audio-card shadow-sm border-0">
                    <Card.Body className="d-flex flex-column justify-content-center">
                      <Player
                        audioUrl={data.audio}
                        title={data.title}
                        isPlaying={currentlyPlaying === i}
                        onPlayToggle={() => handlePlayToggle(i)}
                        theme={theme}
                      />
                    </Card.Body>
                  </Card>
                </ScrollReveal>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
