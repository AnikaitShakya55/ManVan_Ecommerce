import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    )
      errors.email = "Valid email is required";
    if (!formData.phoneNumber.match(/^\d{10}$/))
      errors.phoneNumber = "Enter a valid 10-digit phone number";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://crudcrud.com/api/6bbbedbe3f854ac5a6d894329ae3155d/CONTACT",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phoneNumber: "", message: "" });
        setErrors({});
      }
    } catch (error) {
      alert("There was an issue submitting the form.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1 className="display-4 fw-bold text-primary">
          Get in Touch with <span className="highlight">MANVAN</span>
        </h1>
        <p className="text-muted">
          Have questions or need assistance? We are here to help! Fill out the
          form and we'll get back to you soon.
        </p>
      </div>
      <div className="contact-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
          />
          {errors.name && <small className="error-text">{errors.name}</small>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          {errors.email && <small className="error-text">{errors.email}</small>}

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="input-field"
          />
          {errors.phoneNumber && (
            <small className="error-text">{errors.phoneNumber}</small>
          )}

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="textarea-field"
          ></textarea>
          {errors.message && (
            <small className="error-text">{errors.message}</small>
          )}

          <button className="submit-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
