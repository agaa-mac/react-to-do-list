import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  { content: "wyprowadzić psa", done: false },
  { content: "zjeść obiad", done: true },
];
const hideDone = false;
export default function App() {
  return (
    <Container>
      <Header title={"Lista zadań"} />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}
