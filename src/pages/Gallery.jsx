import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import projects, { categories } from "../data/projects";
import company from "../data/company";
import "./Gallery.css";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    document.title = `Our Work & Gallery | ${company.name}`;
  }, []);

  // Filter projects by category
  const filteredProjects =
    activeCategory === "All Work"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <PageTransition>
      <PageHeader
        title="OUR WORK GALLERY"
        subtitle="A visual showcase of our technical contracting, custom steel fabrications, spiral staircases, and metalwork across the UAE."
      />

      <section className="gallery-section section">
        <div className="container">
          {/* Category Filter Navigation */}
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="gallery-filter-count">
                  (
                  {cat === "All Work"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length}
                  )
                </span>
              </button>
            ))}
          </div>

          {/* Pure Image Grid */}
          <motion.div layout className="gallery-grid">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="gallery-card"
                  onClick={() => setLightboxImage(project.image)}
                >
                  <div className="gallery-card__image-wrap">
                    <img
                      src={project.image}
                      alt={project.title || "Project Photo"}
                      className="gallery-card__image"
                      loading="lazy"
                    />
                    <div className="gallery-card__overlay">
                      <span className="gallery-card__zoom-icon">🔍</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="gallery-empty">
              <p>No photos found under this category.</p>
              <button
                className="btn btn--primary"
                onClick={() => setActiveCategory("All Work")}
              >
                View All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Simple Fullscreen Image View (No details page) */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="gallery-lightbox__close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close photo"
            >
              &times;
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="Full size work photo"
              className="gallery-lightbox__img"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </PageTransition>
  );
}
