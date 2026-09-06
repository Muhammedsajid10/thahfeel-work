import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import company from "../data/company";
import "./AboutPreview.css";

export default function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="about-preview__inner">
        <div className="about-preview__visual">
          <div className="about-preview__visual-sticky">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80" 
              alt="Architectural details" 
              className="about-preview__img"
            />
          </div>
        </div>
        
        <div className="about-preview__content">
          <div className="about-preview__content-inner">
            <motion.p 
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              01 &mdash; ABOUT US
            </motion.p>
            
            <motion.h2 
              className="about-preview__heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
            >
              Dependable execution and professional workmanship.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              <p className="about-preview__text">
                {company.description}
              </p>
              
              <div className="about-preview__vision-mission" style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--rust)', marginBottom: '8px' }}>Our Vision</h3>
                  <p className="about-preview__text">
                    To build a trusted technical services business recognized for dependable execution, professional workmanship and coordinated specialist solutions.
                  </p>
                </div>
                
                <div>
                  <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--rust)', marginBottom: '8px' }}>Our Mission</h3>
                  <p className="about-preview__text">
                    To deliver reliable technical and contracting services with a strong focus on quality, safety, precision, responsiveness and client satisfaction.
                  </p>
                </div>
              </div>
              
              <Link to="/about" className="about-preview__cta" style={{ marginTop: '40px' }}>
                DISCOVER OUR APPROACH
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
