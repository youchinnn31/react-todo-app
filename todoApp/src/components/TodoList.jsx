import TodoItem from "./TodoItem";
const TodoList = ({ tasks, handleToggle }) => {
  console.log("todoList");
  return (
    <>
      {tasks.map((task) => {
        return <TodoItem task={task} handleToggle={handleToggle} />;
      })}
    </>
  );
};

export default TodoList;
