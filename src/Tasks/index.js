import "./style.css";

export default function Tasks({ tasks, hideDoneTasks }) {
  return (
    <ul className="list">
      {tasks.map(function (task, index) {
        return (
          <li
            key={index}
            className={`
        list__item ${task.done && hideDoneTasks ? "list__item--hidden" : ""}`}
          >
            {task.content}
          </li>
        );
      })}
    </ul>
  );
}
