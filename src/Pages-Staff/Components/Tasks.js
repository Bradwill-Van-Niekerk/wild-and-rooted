import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import './Task.css';

function Tasks({ id, table, order = { drink: '', starter: '', main: '', dessert: '' } }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition: transition || 'none',
    transform: transform ? CSS.Transform.toString(transform) : '',
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
    height:'10rem'  ///
  };

  const handleShift = () => {
    // Implement the logic to handle shifting, if necessary
    console.log("Shift clicked");
  };

  return (
    // <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
    //   <span>{table}</span>
    //   <span>{order.drink}</span>
    //   <span>{order.starter}</span>
    //   <span>{order.main}</span>
    //   <span>{order.dessert}</span>
    //   <button className="ShiftOver" onClick={handleShift}> ={'>'} </button>
    // </div>
    <>
    {subtasks.map((subtask, subtaskIndex) => (
      <div key={subtaskIndex}>
        <h4><h2>{subtask.table}</h2>
          <ul>
            <li>
              {subtask.drink}
            </li>
            <li>
              {subtask.starter}
            </li>
            <li>
              {subtask.main}
            </li>
            <li>
              {subtask.dessert}
            </li>
          </ul>
        </h4>
      </div>
    ))}
    </>
  );
}

export default Tasks;
