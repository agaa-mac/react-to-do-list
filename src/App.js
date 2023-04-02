import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  { content: "wyprowadzić psa", done: true },
  { content: "zjeść obiad", done: false },
];
const hideDoneTasks = true;
export default function App() {
  return (
    <div className="App">
      <Header title={"Lista zadań"} />
      <Form />
      <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
    </div>
  );
}
