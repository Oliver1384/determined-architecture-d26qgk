import { useState, KeyboardEvent } from 'react'
import '../styles/Form.scss'

interface FormProps {
  onAddTask: (task: string) => void
}

export const Form = ({ onAddTask }: FormProps) => {
  const [task, setTask] = useState<string | undefined>()

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13 && task) {
      onAddTask(task);
    }
  };

  return (
    <div className={'todo-form'}>
      <input
        placeholder={'Enter new task'}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button
        disabled={!task}
        type={'button'}
        onClick={() => {
          if (task) {
            onAddTask(task)
          }
        }}>
        Add task
      </button>
    </div>
  );
};

