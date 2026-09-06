import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./FeatureSections.css";

const features = [
  {
    title: "PRACTICAL EXECUTION",
    desc: "A hands-on approach focused on installation quality and site requirements. We combine practical site coordination, workmanship, and responsive service to deliver solutions tailored to project requirements.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "INTEGRATED MAINTENANCE",
    desc: "One clear maintenance package across the technical service portfolio. We provide a consolidated approach supporting planned upkeep, responsive attention to defects, and continued functionality of installed works.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1800&q=80",
  }
];

function FeatureBlock({ feature, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  return (
    <div className="feature-block" ref={ref}>
      <div className="feature-block__media">
        <motion.img 
          src={feature.image} 
          alt={feature.title} 
          style={{ y }}
          className="feature-block__img"
        />
        <div className="feature-block__overlay" />
      </div>
      
      <div className="container feature-block__content">
        <div className={`feature-block__content-inner ${index % 2 !== 0 ? 'feature-block__content-inner--right' : ''}`}>
          <motion.p 
            className="feature-block__num"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
          >
            0{index + 1}
          </motion.p>
          <motion.h2 
            className="feature-block__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: 0.1 }}
          >
            {feature.title}
          </motion.h2>
          <motion.p 
            className="feature-block__desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: 0.2 }}
          >
            {feature.desc}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default function FeatureSections() {
  return (
    <section className="feature-sections">
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <motion.p 
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
        >
          03 &mdash; OUR CAPABILITIES
        </motion.p>
      </div>
      {features.map((feature, idx) => (
        <FeatureBlock key={idx} feature={feature} index={idx} />
      ))}
    </section>
  );
}
