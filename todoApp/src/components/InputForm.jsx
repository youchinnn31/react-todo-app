import { useRef } from "react";
const InputForm = ({ handleAdd }) => {
  const taskRef = useRef();
  const handleClick = () => {
    const task = taskRef.current.value;
    if (task === "") {
      return;
    }
    handleAdd(task);
    taskRef.current.value = "";
  };
  return (
    <>
      <input type="text" ref={taskRef} />
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default InputForm;
