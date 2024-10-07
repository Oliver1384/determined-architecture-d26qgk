import { useState, useEffect } from 'react'

import { Form } from './components/Form'
import { List } from './components/List'
import { Results } from './components/Results'
import './styles/Index.scss'

export interface Task {
  id: number;
  label: string;
  checked: boolean;
}

const tasksExample: Task[] = [
  {
    id: 0,
    label: "Fix an ability to display all tasks",
    checked: false,
  },
  {
    id: 1,
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: false,
  },
  {
    id: 2,
    label: "Fix an ability to add a new task",
    checked: false,
  },
  {
    id: 3,
    label: "Fix an ability to toggle a task",
    checked: false,
  },
  {
    id: 4,
    label: "Fix an ability to delete a task",
    checked: false,
  },
  {
    id: 5,
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
        id: prevState.length,
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
