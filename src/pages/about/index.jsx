import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  datadifferentiators,
  datavoexpertise,
  dataphilosophy,
  worktimeline,
  skills,
  services,
} from "../../content_options";
import ScrollReveal from "../../components/scrollreveal";

export const About = () => {
  return (
    <section id="about">
      <Container className="About-header">
        <ScrollReveal animation="fade-up">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">About Me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{dataabout.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{dataabout.aboutme}</p>
              </div>
            </Col>
          </Row>
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{datadifferentiators.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{datadifferentiators.intro}</p>
                <ul className="about__list">
                  {datadifferentiators.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>{datadifferentiators.outro}</p>
              </div>
            </Col>
          </Row>
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{datavoexpertise.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{datavoexpertise.intro}</p>
                <ul className="about__list">
                  {datavoexpertise.languages.map((lang, i) => (
                    <li key={i}>{lang}</li>
                  ))}
                </ul>
                <p>{datavoexpertise.outro}</p>
              </div>
            </Col>
          </Row>
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{dataphilosophy.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <ul className="about__list">
                  {dataphilosophy.principles.map((principle, i) => (
                    <li key={i}>{principle}</li>
                  ))}
                </ul>
                <p>{dataphilosophy.description}</p>
              </div>
            </Col>
          </Row>
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <Row className=" sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Work Timeline</h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Col>
          </Row>
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Skills</h3>
            </Col>
            <Col lg="7">
              {skills.map((data, i) => {
                return (
                  <div key={i}>
                    <h3 className="progress-title">{data.name}</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${data.value}%`,
                        }}
                      >
                        <div className="progress-value">{data.value}%</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>
        </ScrollReveal>
        <ScrollReveal animation="fade-up">
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Services</h3>
            </Col>
            <Col lg="7">
              {services.map((data, i) => {
                return (
                  <div className="service_ py-4" key={i}>
                    <h5 className="service__title">{data.title}</h5>
                    <p className="service_desc">{data.description}</p>
                  </div>
                );
              })}
            </Col>
          </Row>
        </ScrollReveal>
      </Container>
    </section>
  );
};
