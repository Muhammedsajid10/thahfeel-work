import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import services from "../data/services";
import "./ContactForm.css";

const initialState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[+()\-\s\d]{7,}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.service) {
    errors.service = "Please select a service.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a little about your project.";
  }

  return errors;
}

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [values, setValues] = useState({
    ...initialState,
    service: services.some((s) => s.title === preselectedService)
      ? preselectedService
      : "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      // No backend is connected yet — this only confirms the form works.
      // Wire this up to an email service or API endpoint when ready.
      setSubmitted(true);
      setValues(initialState);
    }
  }

  if (submitted) {
    return (
      <div className="contact-form contact-form--success" role="status">
        <h3>Enquiry sent</h3>
        <p>
          Thanks for reaching out. We've received your details and will get
          back to you shortly.
        </p>
        <button className="btn btn--ghost-light" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span className="contact-form__error" id="name-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <span className="contact-form__error" id="phone-error">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span className="contact-form__error" id="email-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="service">Select Service</label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Choose a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="contact-form__error" id="service-error">
              {errors.service}
            </span>
          )}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span className="contact-form__error" id="message-error">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="contact-form__submit">
        SEND ENQUIRY <span>&rarr;</span>
      </button>
    </form>
  );
}
