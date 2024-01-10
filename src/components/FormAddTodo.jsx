import { useState } from "react"
import useTodo from "../hooks/useTodo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons"

function FormAddTodo() {
  const {hdlAdd} = useTodo()
  const [input, setInput] = useState('')

  const hdlSubmit = (e) => {
    e.preventDefault()  
    let newJob = { todo: input, completed: false, user: 1 }
    hdlAdd(newJob)
  }

  return (
    <form className="form-add-todo" onSubmit={hdlSubmit}>
      <input value={input} onChange={e=>setInput(e.target.value)} />
      <button type="submit"><FontAwesomeIcon icon={faAdd}/></button>
    </form>
  )
}

export default FormAddTodo