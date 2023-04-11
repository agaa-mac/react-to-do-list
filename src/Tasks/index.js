import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map((task, index) => {
      return (
        <li
          key={index}
          className={`
        list__item ${task.done && hideDone ? "list__item--hidden" : ""}`}
        >
          <button
            onClick={() => toggleTaskDone(task.id)}
            className="list__button list__button--toogleDone"
          >
            {task.done ? "✓" : ""}
          </button>
          <span
            className={`list__content${
              task.done ? " list__content--done" : ""
            }`}
          >
            {task.content}
          </span>
          <button
            onClick={() => removeTask(task.id)}
            className="list__button list__button--remove"
          >
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </li>
      );
    })}
  </ul>
);

export default Tasks;
