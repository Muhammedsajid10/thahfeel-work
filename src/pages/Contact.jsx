import { useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ContactForm from "../components/ContactForm";
import company from "../data/company";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    document.title = `Contact | ${company.name}`;
  }, []);

  return (
    <PageTransition>
      <section className="contact-page">
        <div className="container contact-page__inner">
          
          {/* Left Side */}
          <div className="contact-page__left">
            <motion.p 
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              06 &mdash; INQUIRIES
            </motion.p>
            <motion.h1 
              className="contact-page__heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              LET'S BUILD<br/>SOMETHING<br/>REMARKABLE.
            </motion.h1>

            <motion.ul 
              className="contact-page__list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <li>
                <span>Phone</span>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <span>WhatsApp</span>
                <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
                  {company.whatsappNumber}
                </a>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <span>Location</span>
                <p>{company.location}</p>
              </li>
            </motion.ul>
          </div>

          {/* Right Side */}
          <motion.div 
            className="contact-page__right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </section>
    </PageTransition>
  );
}
