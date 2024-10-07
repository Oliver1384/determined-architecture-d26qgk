import { KeyboardEvent } from 'react'

import { Task } from '../app'
import { Checkbox } from './Checkbox'
import '../styles/List.scss'

interface ListTasksProps {
  tasks: Task[]
  onUpdateTasks: (tasks: Task[]) => void
}

export const List = ({ tasks, onUpdateTasks }: ListTasksProps) => {
  const handleDelete = (id: string) => {
    const currentTasks = tasks.filter(tasks => tasks.id !== id)
    onUpdateTasks(currentTasks)
  };

  const toggleCheck = (id: string) => {
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

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>, id: string) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className={'list'}>
      <span className={'list-title'}>Things to do:</span>
      {tasks.length ? (
        <div className={'list-content'}>
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
        <div className={'no-todos'}>
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
