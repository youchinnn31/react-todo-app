import { useState,useRef } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [tasks, setTask] = useState([]);
  const taskRef = useRef();
  const handleClick = () => {
    const task = taskRef.current.value;
    if(task === "") {
      return;
    }
    setTask((prev) => {
      return [...prev,{id:uuidv4(),task:task,completed:false}];
    });
    taskRef.current.value = "";
  };
  const handleToggle = (id) => {
    const newTasks = tasks.map((task) => {
      if(task.id === id){
        return {...task,completed:!task.completed};
      }
      return task;
    });
    setTask(newTasks);
  };
  const deleteClick = () => {
    const newTasks = tasks.filter((task) => {
      return !task.completed;
    });
    setTask(newTasks);
  };
  return (
    <>
      <h1>TodoApp</h1>
      <input type = "text" ref = {taskRef} />
      <button onClick = {handleClick}>+</button>
      {tasks.map((task) => {
        return (
        <li>
          <input type = "checkbox" checked = {task.completed} onChange = {() => handleToggle(task.id)} />
          <span>{task.task}</span>
        </li>
        );
      })}
      <button onClick = {deleteClick}>選択済みの項目を削除</button>
    </>
  )
}

export default App
