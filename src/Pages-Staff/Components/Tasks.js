import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import './Task.css';

function Tasks({ id, table, order }) {
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
    <div className="task" key={id}>
      <h3>{table}</h3>
    {/* Render order details */}
    <p><strong>Drink:</strong> {order.drink}</p>
    <p><strong>Starter:</strong> {order.starter}</p>
    <p><strong>Main:</strong> {order.main}</p>
    <p><strong>Dessert:</strong> {order.dessert}</p>
  </div>
  );
}

export default Tasks;
