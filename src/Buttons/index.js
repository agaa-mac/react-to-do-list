import "./style.css";

const Buttons = ({ tasks, hideDone }) => {
  if (tasks.length > 0) {
    return (
      <div className="buttons">
        <button className="buttons__button">
          {hideDone ? "Pokaż " : "Ukryj "}
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
};
export default Buttons;
