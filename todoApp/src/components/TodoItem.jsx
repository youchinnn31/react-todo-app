const TodoItem = ({ task, handleToggle }) => {
  console.log("Item");
  return (
    <>
      <li key={task.id}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggle(task.id)}
        />
        <span>{task.task}</span>
      </li>
    </>
  );
};

export default TodoItem;
