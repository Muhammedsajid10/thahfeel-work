import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ProcessSection.css";

const steps = [
  {
    title: "CONSULTATION",
    desc: "We analyze structural requirements and architectural intent to propose the most viable steel and glass solutions."
  },
  {
    title: "ENGINEERING",
    desc: "Detailed shop drawings and structural calculations are prepared to ensure absolute precision and safety."
  },
  {
    title: "FABRICATION",
    desc: "Our facility crafts each component using advanced techniques, maintaining rigorous quality control throughout."
  },
  {
    title: "INSTALLATION",
    desc: "Experienced site teams execute the installation with meticulous attention to alignment and finish."
  }
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="process-section" ref={containerRef}>
      <div className="container">
        <div className="process-section__inner">
          <div className="process-section__left">
            <div className="process-section__sticky">
              <p className="section-label">05 &mdash; OUR PROCESS</p>
              <h2 className="process-section__heading">How We Work</h2>
            </div>
          </div>
          
          <div className="process-section__right">
            <div className="process-section__timeline">
              <motion.div 
                className="process-section__progress" 
                style={{ scaleY: scrollYProgress }} 
              />
              {steps.map((step, idx) => (
                <div key={idx} className="process-step">
                  <div className="process-step__node" />
                  <div className="process-step__content">
                    <span className="process-step__num">PHASE 0{idx + 1}</span>
                    <h3 className="process-step__title">{step.title}</h3>
                    <p className="process-step__desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
