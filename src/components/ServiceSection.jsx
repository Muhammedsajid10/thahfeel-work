import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/services";
import "./ServiceSection.css";

export default function ServiceSection() {
  return (
    <section className="service-section">
      <div className="container">
        <motion.p 
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          02 &mdash; OUR SERVICES
        </motion.p>
      </div>

      <div className="service-list">
        {services.map((service, idx) => (
          <Link 
            to={`/services`} 
            key={service.id} 
            className="service-row"
            data-cursor="project"
          >
            <div className="service-row__bg">
              <img src={service.image} alt="" loading="lazy" />
            </div>
            <div className="container service-row__inner">
              <span className="service-row__num">0{idx + 1}</span>
              <h3 className="service-row__title">{service.title}</h3>
              <span className="service-row__arrow">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Steel Works */}
      <div className="featured-service container">
        <motion.div 
          className="featured-service__image"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          data-cursor="image"
        >
          <img src={services[0].image} alt="Steel Works" loading="lazy" />
        </motion.div>
        
        <div className="featured-service__content">
          <motion.h3 
            className="featured-service__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            STRUCTURAL STEEL
          </motion.h3>
          <motion.p 
            className="featured-service__desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            Fabrication and installation of robust steel frameworks, canopies, and custom architectural elements.
          </motion.p>
          <motion.ul 
            className="featured-service__list"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <li>Gates & Fencing</li>
            <li>Handrails</li>
            <li>Canopies</li>
            <li>Structural Frameworks</li>
          </motion.ul>
        </div>
      </div>

      {/* Featured Glass Works */}
      <div className="featured-service featured-service--reverse container">
        <motion.div 
          className="featured-service__image"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          data-cursor="image"
        >
          <img src={services[1].image} alt="Glass Works" loading="lazy" />
        </motion.div>
        
        <div className="featured-service__content">
          <motion.h3 
            className="featured-service__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            ARCHITECTURAL GLASS
          </motion.h3>
          <motion.p 
            className="featured-service__desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            Frameless facades, premium partitions, and intricate glass balustrades designed for visual impact.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
