import "./style.css";

export default function Section({ title, extraHeaderContent, body }) {
  return (
    <section className="section">
      <header className="section__header">
        <h2 className="section__title">{title}</h2>
        {extraHeaderContent}
      </header>
      <div className="section__body">{body}</div>
    </section>
  );
}
