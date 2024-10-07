import '../styles/Results.scss'

interface ResultsProps {
  totalTaskChecked: number
}

export const Results = ({ totalTaskChecked }: ResultsProps) => {

  return (
    <div className={'todo-results'}>
      {`Done: ${totalTaskChecked}`}
    </div>
  )
}

