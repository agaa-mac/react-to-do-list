import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { content: "wyprowadzić psa", done: false },
  { content: "zjeść obiad", done: false },
];
const hideDoneTasks = true;
export default function App() {
  return (
    <div className="App">
      <Header title={"Lista zadań"} />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} />}
      />
    </div>
  );
}
