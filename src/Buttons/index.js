import "./style.css";

export default function Buttons({ tasks, hideDoneTasks }) {
  if (tasks.length > 0) {
    return (
      <div className="buttons">
        <button className="buttons__button">
          {hideDoneTasks ? "Pokaż " : "Ukryj "}
          Ukończone
        </button>
        <button
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </div>
    );
  } else {
    return null;
  }
}
