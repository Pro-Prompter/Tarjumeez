import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "us",
    phone: "",
    company: "",
    project_details: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      country: "us",
      phone: "",
      company: "",
      project_details: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-top-bar"></div>

      <div className="contact-arrow">
        <svg viewBox="0 0 40 22" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 40,0 20,22" fill="#7a8a95" />
        </svg>
      </div>

      <h2 className="contact-heading">CONTACT</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-row">
          <div className="contact-field">
            <label className="contact-label">
              First Name <span className="req">*</span>
            </label>
            <input
              className="contact-input"
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-field">
            <label className="contact-label">Last Name</label>
            <input
              className="contact-input"
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="contact-field">
            <label className="contact-label">
              Email <span className="req">*</span>
            </label>
            <input
              className="contact-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="contact-row">
          <div className="contact-field">
            <label className="contact-label">
              Country <span className="req">*</span>
            </label>
            <div className="contact-select-wrap">
              <select
                className="contact-select"
                name="country"
                value={form.country}
                onChange={handleChange}
                required
              >
                <option value="us">United States</option>
                <option value="pk">Pakistan</option>
                <option value="ae">UAE</option>
                <option value="sa">Saudi Arabia</option>
                <option value="gb">United Kingdom</option>
                <option value="other">Other</option>
              </select>
              <svg
                className="contact-select-arrow"
                viewBox="0 0 12 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1l5 5 5-5"
                  stroke="#333"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="contact-field">
            <label className="contact-label">Phone</label>
            <input
              className="contact-input"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="contact-field">
            <label className="contact-label">Company</label>
            <input
              className="contact-input"
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="contact-row contact-row--full">
          <div className="contact-field contact-field--full">
            <label className="contact-label">
              Brief Project Details <span className="req">*</span>
            </label>
            <textarea
              className="contact-textarea"
              name="project_details"
              rows="6"
              value={form.project_details}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <div className="contact-submit-row">
          <button className="contact-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
}
