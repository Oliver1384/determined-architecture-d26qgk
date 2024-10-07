import "./todo-results.scss"

interface TodoResults {
  totalTaskChecked: number
}

export const TodoResults = ({ totalTaskChecked }: TodoResults) => {

  return (
    <div className="todo-results">
      {`Done: ${totalTaskChecked}`}
    </div>
  )
}

