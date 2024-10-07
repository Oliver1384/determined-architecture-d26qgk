import React, { useState } from 'react'
import { Task } from "../../app"
import "./todo-form.scss"

interface TodoFormProps {
  onAddTask: (task: Task) => void
}

export const TodoForm = ({ onAddTask }: TodoFormProps) => {
  const [task, setTask] = useState()

  const handleKeyUp = (e): void => {
    if (e.keyCode === 13) {
      onAddTask(task);
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
      <button type="button" onClick={onAddTask}>
        Add task
      </button>
    </div>
  );
};

