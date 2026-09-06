import { Link } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({ service, ctaLabel = "Enquire Now" }) {
  return (
    <article className="service-card">
      <div className="service-card__image">
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.short}</p>
        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="service-card__link"
        >
          {ctaLabel}
          <span aria-hidden="true">›</span>
        </Link>
      </div>
    </article>
  );
}
