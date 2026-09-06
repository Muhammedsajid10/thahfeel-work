import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import CTASection from "../components/CTASection";
import services from "../data/services";
import company from "../data/company";
import "./Services.css";

export default function Services() {
  useEffect(() => {
    document.title = `Services | ${company.name}`;
  }, []);

  return (
    <PageTransition>
      <section className="services-hero">
        <div className="container services-hero__inner">
          <motion.p 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            OUR EXPERTISE
          </motion.p>
          <motion.h1 
            className="services-hero__heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            INTEGRATED<br/>CAPABILITIES.
          </motion.h1>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              className="service-detail"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service-detail__content">
                <div className="service-detail__header">
                  <span className="service-detail__num">0{i + 1}</span>
                  <h2>{service.title}</h2>
                </div>
                <p className="service-detail__desc">{service.description}</p>
                
                <div className="service-detail__types">
                  <h3>SCOPE OF WORK</h3>
                  <ul>
                    {service.workTypes.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="service-detail__btn"
                >
                  ENQUIRE ABOUT THIS SERVICE &rarr;
                </Link>
              </div>
              
              <div className="service-detail__media">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
