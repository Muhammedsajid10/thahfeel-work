import { motion } from "framer-motion";
import "./IntroStatement.css";

export default function IntroStatement() {
  const statement = ["WE CREATE", "STRUCTURES", "THAT DEFINE", "SPACES."];
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="intro-statement">
      <div className="container intro-statement__inner">
        <motion.div 
          className="intro-statement__text"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {statement.map((line, idx) => (
            <div key={idx} className="intro-statement__line-wrapper">
              <motion.h2 variants={lineVariants}>{line}</motion.h2>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          className="intro-statement__desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>
            We are a dedicated team of engineers, fabricators, and installers 
            bringing high-end architectural concepts to life with unmatched 
            precision in steel and glass.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
