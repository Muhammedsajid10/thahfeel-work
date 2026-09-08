import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";
import "./GalleryPreview.css";

export default function GalleryPreview() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="gallery-preview section section--dark">
      <div className="container">
        <div className="gallery-preview__header">
          <div>
            <motion.p
              className="section-label"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              03 &mdash; OUR CRAFTSMANSHIP
            </motion.p>
            <motion.h2
              className="gallery-preview__heading"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Work Showcase
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/gallery" className="btn btn--ghost-dark">
              VIEW FULL GALLERY &rarr;
            </Link>
          </motion.div>
        </div>

        <div className="gallery-preview__grid">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="gallery-preview__item"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
            >
              <Link to="/gallery" className="gallery-preview__card">
                <div className="gallery-preview__img-wrap">
                  <img
                    src={project.image}
                    alt="Work Photo"
                    className="gallery-preview__img"
                    loading="lazy"
                  />
                  <div className="gallery-preview__overlay">
                    <span className="gallery-preview__link-text">
                      VIEW PHOTO &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
