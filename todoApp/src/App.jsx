import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
function App() {
  const [tasks, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("todoAppTasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todoAppTasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = (task) => {
    setTask((prev) => {
      return [...prev, { id: uuidv4(), task: task, completed: false }];
    });
  };

  const handleToggle = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTask(newTasks);
  };
  const deleteClick = () => {
    setTask((prev) => {
      return prev.filter((task) => {
        return !task.completed;
      });
    });
  };
  return (
    <>
      <h1>TodoApp</h1>
      <InputForm handleAdd={handleAdd} />
      <TodoList tasks={tasks} handleToggle={handleToggle} />
      <button onClick={deleteClick}>選択済みの項目を削除</button>
    </>
  );
}

export default App;
