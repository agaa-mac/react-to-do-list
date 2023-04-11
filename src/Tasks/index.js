import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="list">
    {tasks.map((task, index) => {
      return (
        <li
          key={index}
          className={`
        list__item ${task.done && hideDone ? "list__item--hidden" : ""}`}
        >
          <button className="list__button list__button--toogleDone">
            {task.done ? "✓" : ""}
          </button>
          <span
            className={`list__content${
              task.done ? " list__content--done" : ""
            }`}
          >
            {task.content}
          </span>
          <button className="list__button list__button--remove">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </li>
      );
    })}
  </ul>
);
export default Tasks;
