import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", paddingTop: 180 }}>
      <div className="container">
        <h1 style={{ fontSize: "2.4rem", marginBottom: 16 }}>Page not found</h1>
        <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
