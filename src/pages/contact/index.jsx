import React, { useRef, useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_options";
import ScrollReveal from "../../components/scrollreveal";

const INITIAL_FORM = {
  email: "",
  name: "",
  message: "",
  loading: false,
  show: false,
  alertmessage: "",
  variant: "",
};

export const ContactUs = () => {
  const [formData, setFormdata] = useState(INITIAL_FORM);
  const alertRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.loading) return;

    setFormdata((prev) => ({ ...prev, loading: true }));

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID,
      )
      .then(
        () => {
          setFormdata({
            ...INITIAL_FORM,
            alertmessage: "SUCCESS! Thank you for your message.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          setFormdata((prev) => ({
            ...prev,
            loading: false,
            alertmessage: `Failed to send: ${error.text}`,
            variant: "danger",
            show: true,
          }));
          alertRef.current?.scrollIntoView({ behavior: "smooth" });
        },
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact">
      <Container>
        <ScrollReveal animation="fade-up">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Contact Me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
        </ScrollReveal>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              ref={alertRef}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata((prev) => ({ ...prev, show: false }))}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <ScrollReveal animation="fade-right">
              <h3 className="color_sec py-4">Get in Touch</h3>
              <address>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
                <br />
                <br />
                {contactConfig.YOUR_FONE && (
                  <p>
                    <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                  </p>
                )}
              </address>
              <p>{contactConfig.description}</p>
            </ScrollReveal>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <ScrollReveal animation="fade-left" className="w-100">
              <form onSubmit={handleSubmit} className="contact__form w-100">
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      required
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <button
                      className="btn ac_btn"
                      type="submit"
                      disabled={formData.loading}
                    >
                      {formData.loading ? "Sending..." : "Send"}
                    </button>
                  </Col>
                </Row>
              </form>
            </ScrollReveal>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"} />
    </section>
  );
};
