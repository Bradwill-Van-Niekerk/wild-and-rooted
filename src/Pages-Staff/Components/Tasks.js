import { useSortable } from "@dnd-kit/sortable"
import { CSS } from '@dnd-kit/utilities';
import './Task.css'

function Tasks({id, title}){
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})
  
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    padding: '8px',
    margin: '4px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f8f8f8',
    cursor: 'move',
    displayFlex: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'left',
    paddingLeft: '2rem', 
  }

  const shiftOver = () =>{
    return(
    <>
      
    </>
    )
  }
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} > 
      {title}
      <button onSubmit={shiftOver} className="ShiftOver" > => </button>
    </div>
  )
}

export default Tasks