import { motion } from "framer-motion";
import "./WhyChooseUs.css";

const points = [
  {
    title: "QUALITY",
    detail: "Attention to workmanship, fit, finish and dependable installation.",
  },
  {
    title: "SAFETY",
    detail: "A safety-conscious approach to site activities and service delivery.",
  },
  {
    title: "RELIABILITY",
    detail: "Clear coordination, responsive support and dependable execution.",
  },
  {
    title: "PRECISION",
    detail: "Careful planning and installation for technical and architectural works.",
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-us">
      <div className="container">
        <motion.p 
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          04 &mdash; CORE VALUES
        </motion.p>
        
        <div className="why-us__list">
          {points.map((p, idx) => (
            <motion.div 
              key={p.title} 
              className="why-us__item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="why-us__num-col">
                <span className="why-us__num">0{idx + 1}</span>
              </div>
              <div className="why-us__content-col">
                <h3 className="why-us__title">{p.title}</h3>
                <p className="why-us__detail">{p.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
