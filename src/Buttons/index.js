import "./style.css";

export default function Buttons({ tasks }) {
  if (tasks.length > 0) {
    return (
      <div className="buttons">
        {" "}
        <button className="buttons__button">Ukończone</button>{" "}
        <button className="buttons__button">Ukończ wszystkie</button>{" "}
      </div>
    );
  } else {
    return null;
  }
}
