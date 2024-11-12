import { useSortable } from "@dnd-kit/sortable"
import { CSS } from '@dnd-kit/utilities';

function Tasks({id, title, columnName}){
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id, data: { column: columnName }})
  
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    padding: '8px',
    margin: '4px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f8f8f8',
    cursor: 'move',
  }
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <input type='checkbox' className='CheckboxOr' />{title}
    </div>
  )
}

export default Tasks