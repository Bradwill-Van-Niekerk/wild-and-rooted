import { useSortable } from "@dnd-kit/sortable"
import { CSS } from '@dnd-kit/utilities';
import './Task.css'

function Tasks({id, title}){
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})
  
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    padding: '2rem',
    margin: '1rem',
    border: '1px solid #ddd',
    borderRadius: '2rem',
    backgroundColor: '#f8f8f8',
    cursor: 'move',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    paddingLeft: '2rem',
  }

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} > 
      <span>{title}</span>
      <button className="ShiftOver" > =&gt </button>
    </div>
  )
}

export default Tasks