import "./style.css";

export default function Form() {
  return (
    <form className="form">
      <input type="text" className="form__textInput" />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
}
