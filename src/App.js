import "./App.css";
import Lesson1 from "./components/lesson_1/Lesson1";
import Lesson2 from "./components/lesson_2/Lesson2";

function App() {
  return (
    <div className="App">
      <h1>React exercises to pratice basic core features</h1>
      <Lesson1/>
      <hr/>
      <Lesson2/>
    </div>
  );
}

export default App;
