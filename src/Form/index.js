import "./style.css";

export default function Form() {
  return (
    <form className="form">
      <input
        type="text"
        className="form__textInput"
        placeholder="Co jest do zrobienia?"
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
}
