import * as React from "react";
import "./todo-form.scss";

interface TodoFormProps {
  onAddTask: (task: Task) => void
}

export const TodoForm = ({}: TodoFormProps) => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    // Handle this method
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
