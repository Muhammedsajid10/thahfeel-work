import { Link } from "react-router-dom";
import company from "../data/company";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <Link to="/" className="footer__logo-huge">
            TAHFEEL
          </Link>
          <div className="footer__info">
            <p className="footer__desc">
              Integrated Technical & Contracting Solutions.
            </p>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <p className="footer__label">SITEMAP</p>
            <nav className="footer__nav" aria-label="Footer">
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/services">SERVICES</Link>
              <Link to="/contact">CONTACT</Link>
            </nav>
          </div>

          <div className="footer__col">
            <p className="footer__label">CONNECT</p>
            <div className="footer__contact">
              <a href={company.phoneHref}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <p>{company.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} {company.name}. ALL RIGHTS RESERVED.</p>
        <p className="footer__credit">DESIGNED FOR THE FUTURE.</p>
      </div>
    </footer>
  );
}
