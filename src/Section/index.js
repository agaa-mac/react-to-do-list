import "./style.css";

export default function Section(props) {
  return (
    <section>
      <header>
        <h2>{props.title}</h2>
        {props.extraHeaderContent}
      </header>
      <div>{props.body}</div>
    </section>
  );
}
