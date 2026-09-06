import "./PageHeader.css";

export default function PageHeader({ title, description }) {
  return (
    <header className="page-header">
      <div className="container">
        <h1 className="page-header__title">{title}</h1>
        {description && <p className="page-header__desc">{description}</p>}
      </div>
    </header>
  );
}
