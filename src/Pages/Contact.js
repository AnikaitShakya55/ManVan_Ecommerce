import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
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
    <MDBContainer fluid className="p-4 contact-container">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="display-4 fw-bold text-primary">
            Get in Touch with <span className="highlight">MANVAN</span>
          </h1>
          <p className="text-muted">
            Have questions or need assistance? We are here to help! Fill out the
            form and we'll get back to you soon.
          </p>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="contact-card">
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mb-3"
                />
                {errors.name && (
                  <small className="error-text">{errors.name}</small>
                )}

                <MDBInput
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mb-3"
                />
                {errors.email && (
                  <small className="error-text">{errors.email}</small>
                )}

                <MDBInput
                  label="Phone Number"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mb-3"
                />
                {errors.phoneNumber && (
                  <small className="error-text">{errors.phoneNumber}</small>
                )}

                <MDBTextArea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mb-3"
                />
                {errors.message && (
                  <small className="error-text">{errors.message}</small>
                )}

                <MDBBtn className="w-100 submit-btn" size="lg" type="submit">
                  Send Message
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Contact;
