import "./style.css";

export default function Section({ title, extraHeaderContent, body }) {
  return (
    <section>
      <header>
        <h2>{title}</h2>
        {extraHeaderContent}
      </header>
      <div>{body}</div>
    </section>
  );
}
