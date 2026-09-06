import "./SectionTitle.css";

export default function SectionTitle({ title, description, align = "left", dark = false }) {
  return (
    <div className={`section-title section-title--${align} ${dark ? "section-title--dark" : ""}`}>
      <h2 className="section-title__heading">{title}</h2>
      {description && <p className="section-title__desc">{description}</p>}
    </div>
  );
}
