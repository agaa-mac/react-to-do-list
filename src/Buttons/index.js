export default function Buttons(props) {
  if (props.tasks.length > 0) {
    return (
      <div>
        {" "}
        <button>Ukończone</button> <button>Ukończ wszystkie</button>{" "}
      </div>
    );
  } else {
    return null;
  }
}
