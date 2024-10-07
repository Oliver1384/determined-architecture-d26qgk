import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Form } from './components/Form'
import { List } from './components/List'
import { Results } from './components/Results'
import './styles/Index.scss'

export interface Task {
  id: string;
  label: string;
  checked: boolean;
}

const tasksExample: Task[] = [
  {
    id: uuidv4(),
    label: "Fix an ability to display all tasks",
    checked: false,
  },
  {
    id: uuidv4(),
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: false,
  },
  {
    id: uuidv4(),
    label: "Fix an ability to add a new task",
    checked: false,
  },
  {
    id: uuidv4(),
    label: "Fix an ability to toggle a task",
    checked: false,
  },
  {
    id: uuidv4(),
    label: "Fix an ability to delete a task",
    checked: false,
  },
  {
    id: uuidv4(),
    label: "Fix an ability to count completed tasks",
    checked: false,
  },
];

export const App = () => {
  const [tasks, setTasks] = useState(tasksExample);
  const [totalTasks, setTotalTasks] = useState(0)

  useEffect(() => {
    setTotalTasks(tasks.filter(tasks => tasks.checked).length)
  }, [tasks, setTotalTasks])

  const handleOnAddTask = (task: string): void => {
    setTasks((prevState: Task[]) => {
      const newTask = {
        id: uuidv4(),
        label: task,
        checked: false
      }
      return [...prevState, newTask]
    })
  }

  const handleUpdateTasks = (tasks: Task[]) => {
    setTasks(tasks)
  }

  return (
    <div className={'root'}>
        <List tasks={tasks} onUpdateTasks={handleUpdateTasks} />
        <Results totalTaskChecked={totalTasks}/>
        <Form onAddTask={handleOnAddTask} />
    </div>
  )
}
