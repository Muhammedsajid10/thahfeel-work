import { useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import CTASection from "../components/CTASection";
import company from "../data/company";
import "./About.css";

const values = [
  { title: "QUALITY", desc: "Attention to workmanship, fit, finish and dependable installation." },
  { title: "SAFETY", desc: "A safety-conscious approach to site activities and service delivery." },
  { title: "RELIABILITY", desc: "Clear coordination, responsive support and dependable execution." },
  { title: "PRECISION", desc: "Careful planning and installation for technical and architectural works." },
  { title: "INTEGRITY", desc: "Professional conduct and transparent working relationships." },
  { title: "CLIENT FOCUS", desc: "Solutions shaped around project requirements and practical outcomes." }
];

const approach = [
  "Understand scope, drawings, specifications and site requirements.",
  "Coordinate materials, fabrication, specialist systems and installation activities.",
  "Execute works with attention to safety, quality and finishing.",
  "Complete inspections, adjustments and handover requirements within the agreed scope.",
  "Provide maintenance and service support where included."
];

export default function About() {
  useEffect(() => {
    document.title = `About | ${company.name}`;
  }, []);

  return (
    <PageTransition>
      <section className="about-hero">
        <div className="container about-hero__inner">
          <motion.p 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            COMPANY PROFILE
          </motion.p>
          <motion.h1 
            className="about-hero__heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            INTEGRATED<br/>TECHNICAL &amp;<br/>CONTRACTING<br/>SOLUTIONS.
          </motion.h1>
        </div>
      </section>

      <section className="about-overview">
        <div className="container about-overview__grid">
          <div className="about-overview__col">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Overview
            </motion.h2>
          </div>
          <div className="about-overview__col">
            <motion.p 
              className="about-overview__lead"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Tahfeel Technical Service provides supply, installation, contracting and maintenance solutions across a broad range of building and technical works.
            </motion.p>
            <motion.p 
              className="about-overview__text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
            >
              We combine practical site coordination, workmanship, reliability and responsive service to deliver solutions tailored to project requirements.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="container about-vision__grid">
          <motion.div 
            className="about-vision__card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3>VISION</h3>
            <p>To build a trusted technical services business recognized for dependable execution, professional workmanship and coordinated specialist solutions.</p>
          </motion.div>
          <motion.div 
            className="about-vision__card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>MISSION</h3>
            <p>To deliver reliable technical and contracting services with a strong focus on quality, safety, precision, responsiveness and client satisfaction.</p>
          </motion.div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <motion.p 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            CORE VALUES
          </motion.p>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                className="about-values__item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-approach">
        <div className="container about-approach__grid">
          <div className="about-approach__title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Delivery<br/>Approach
            </motion.h2>
          </div>
          <div className="about-approach__list">
            {approach.map((step, i) => (
              <motion.div 
                key={i} 
                className="about-approach__step"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="about-approach__num">0{i + 1}</span>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
