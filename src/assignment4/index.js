import './Assignment4.css'
import { useState } from 'react'
import TodoItem from './TodoItem'

const Assignment4 = () => {
  const [todo, setTodo] = useState('')
  const [List, setList] = useState([])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setList((prev) => [...prev, todo])
    setTodo('')
  }

  const onChangeHandler = (e) => setTodo(e.target.value)

  const renderedTodoList = List.map((v, i) => <TodoItem key={i} v={v} />)

  return (
    <div className="as-4">
      <form className="as-4__card" onSubmit={onSubmitHandler}>
        <div>輸入文字後按下Enter鍵</div>
        <input
          type="text"
          value={todo}
          onChange={onChangeHandler}
          placeholder="請輸入代辦事項"
        />
        <ul>{renderedTodoList}</ul>
      </form>
    </div>
  )
}

export default Assignment4
