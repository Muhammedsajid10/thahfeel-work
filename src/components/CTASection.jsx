import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import "./CTASection.css";

export default function CTASection() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section className="cta-section" ref={ref}>
      <div className="cta-section__bg">
        <motion.img 
          src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=1800&q=80" 
          alt="Architectural structure" 
          loading="lazy" 
          style={{ y, scale: 1.1 }}
        />
        <div className="cta-section__overlay" />
      </div>
      <div className="container cta-section__inner">
        <motion.h2 
          className="cta-section__heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          START YOUR<br/>PROJECT
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/contact" className="cta-section__btn">
            <span className="cta-section__btn-text">CONTACT US</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
