import { KeyboardEvent } from "react";
import { Task } from "../../app";
import { Checkbox } from "../checkbox";
import "./todo-list.scss";

interface TodoListTasks {
  tasks: Task[]
  onUpdateTasks: (tasks: Task[]) => void
}

export const TodoList = ({ tasks, onUpdateTasks }: TodoListTasks) => {
  const handleDelete = (id: number) => {
    const currentTasks = tasks.filter(tasks => tasks.id !== id)
    onUpdateTasks(currentTasks)
  };

  const toggleCheck = (id: number) => {
    const currentTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          checked: !task.checked
        }
      }
      return task
    })
    onUpdateTasks(currentTasks)
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>, id: number) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {tasks.length ? (
        <div className="todo-list-content">
          {tasks.map((taskItem) => (
            <Checkbox
              key={taskItem.id}
              label={taskItem.label}
              checked={taskItem.checked}
              onClick={() => toggleCheck(taskItem.id)}
              onKeyUp={
                (e: KeyboardEvent<HTMLInputElement>) => handleKeyUp(e, taskItem.id)
              }
              onDelete={() => handleDelete(taskItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
