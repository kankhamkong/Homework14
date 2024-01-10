import { faEdit } from "@fortawesome/free-regular-svg-icons"
import useTodo from "../hooks/useTodo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons"

function TodoItem(props) {
  const {job, setEditId} = props
  const {hdlDel} = useTodo()

  const onDelete = () => {
    if(confirm('Delete this item?')) { hdlDel(job.id) }
  }
  return (
    <div className="todo-item">
      <p className={job.completed ? 'job-done' : ''}>{job.todo} </p>
      <div className="btn-group">
        <a onClick={()=>{setEditId(job.id)}}><FontAwesomeIcon icon={faEdit}/></a>
        <a onClick={onDelete}><FontAwesomeIcon icon={faTrash}/></a>
      </div>
    </div>
  )
}

export default TodoItem