import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  { content: "wyprowadzić psa", done: false },
  { content: "zjeść obiad", done: false },
];
const hideDoneTasks = true;
export default function App() {
  return (
    <div className="App">
      <Header title={"Lista zadań"} />
      <Form />
      <Buttons tasks={tasks} />
      <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
    </div>
  );
}
