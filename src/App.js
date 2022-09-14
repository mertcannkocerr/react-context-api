import "./App.css";
import { Navbar } from "./components/Navbar";
import { ToDoList } from "./components/ToDoList";

const App = () => {
  // This app shows how Context API works.
  // We need to show To Do List item count on Navigation bar.
  // Without using Lifting the State Up method, we can achieve that with
  // using Context API.

  return (
    <div className="App">
      <Navbar />
      <ToDoList />
    </div>
  );
};

export default App;
