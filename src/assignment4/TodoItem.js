import { useState } from 'react'

const TodoItem = ({ v }) => {
  const [done, setDone] = useState(false)

  return (
    <li
      className={`todo-item  ${done ? 'todo-item--done' : ''} `}
      onClick={() => setDone((prev) => !prev)}
    >
      {`${v} ${done ? '--已完成' : ''}`}
    </li>
  )
}

export default TodoItem
