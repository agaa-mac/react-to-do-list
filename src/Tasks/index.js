import "./style.css";
export default function Tasks(props) {
  return (
    <ul className="list">
      {props.tasks.map(function (task, index) {
        return (
          <li
            key={index}
            className={`
        list__item ${
          task.done && props.hideDoneTasks ? "list__item--hidden" : ""
        }`}
          >
            {task.content}
          </li>
        );
      })}
    </ul>
  );
}
