import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import company from "../data/company";
import "./Hero.css";

export default function Hero({
  title,
  description,
  primaryCta,
  image,
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 1.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="hero">
      {/* Initial Black Screen Overlay - fades out */}
      <motion.div 
        className="hero__intro-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      />
      
      {/* Background Image Reveal */}
      <motion.div 
        className="hero__media"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
      >
        <img src={image} alt="Architectural structure" />
        <div className="hero__scrim" />
      </motion.div>

      <motion.div 
        className="container hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero__content-inner">
          <motion.p className="hero__company-name" variants={itemVariants}>
            [ {company.name.toUpperCase()} ]
          </motion.p>
          
          <motion.h1 className="hero__title" variants={itemVariants}>
            {title.split('.').map((line, i, arr) => (
              <span key={i}>
                {line.trim()}{i < arr.length - 1 ? '.' : ''}
                <br />
              </span>
            ))}
          </motion.h1>
          
          <motion.p className="hero__desc" variants={itemVariants}>
            {description}
          </motion.p>
          
          <motion.div className="hero__ctas" variants={itemVariants}>
            {primaryCta && (
              <Link to={primaryCta.to} className="hero__btn">
                {primaryCta.label} <span>&rarr;</span>
              </Link>
            )}
          </motion.div>
        </div>
        
        <motion.div className="hero__right-sidebar" variants={itemVariants}>
          <ul className="hero__services-list">
            <li><span>01</span> STEEL WORKS</li>
            <li><span>02</span> GLASS WORKS</li>
            <li><span>03</span> CUSTOM SOLUTIONS</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="hero__scroll-text">SCROLL TO EXPLORE</span>
        <div className="hero__scroll-line">
          <motion.div 
            className="hero__scroll-line-inner"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
