import React, { useState } from 'react';
import '../Pages-Staff-CSS/Orders.css'
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor } from '@dnd-kit/core';
import { arrayMove,sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Column from './Components/Column';
import Input from './Components/Input';
import { useSensors } from '@dnd-kit/core';

function OrderHelp({ setHelpOpenFalse }) {

  return (
    <>
      <div className='HelpBox'>
        <div className='HelpText'>
        <div>
          <button type="button" className='CloseHelp' onClick={setHelpOpenFalse}>X</button>
        </div>
          <h3 className='HelpHeading'>Help</h3>
          <p><strong>To use the app, you can start by adding a new order by clicking the "add order" button.</strong>
          <br/>You can view and update orders by selecting them directly from the list. Inside the order, you can manually
            change information associated with an order or update its status. However, note that you can quickly change the
            status of an order by dragging it between the three different columns with your mouse.</p>
        </div>
      </div>
    </>
  );
}

// Orders Component
function Orders() {
  const [isHelpOpen, setHelpOpen] = useState(false); // Toggle Help
  
  const setHelpOpenFalse = () => {
    setHelpOpen(false);
  };

  const [columns, setColumns] = useState({
    ordered: [ {id: 1, title: "Pizza"},
      {id: 2, table: "", drinks: "", starter: "", main: ""},
      {id: 3, title: "24 Wings"},
    ],
    preparing: [],
    served:[]
  })

  const addTask = (table, drinks, starters, main, dessert) => {
    setColumns(prevColumns => ({
      ...prevColumns,
      ordered: [...prevColumns.ordered, { id: Date.now(), title }]
    }));
  };

  const getTaskPosition = (id, column) => columns[column].findIndex(task => task.id === id)

  const handleDragEnd = event => {
    const {active, over} = event;

    if(active.id === over.id) return; //no change if the items dropped in the same place

    const activeColumn = active.data.current.column;
    const overColumn = over.data.current.column;

    if (activeColumn === overColumn) {
      // If dragged within the same column, reorder tasks
      const columnTasks = columns[activeColumn];
      const originalPosition = getTaskPosition(active.id, activeColumn);
      const newPosition = getTaskPosition(over.id, activeColumn);
      
      setColumns(prevColumns => ({
        ...prevColumns,
        [activeColumn]: arrayMove(columnTasks, originalPosition, newPosition)
      }));
    } else {
      // Move task between columns
      const sourceTasks = columns[activeColumn];
      const targetTasks = columns[overColumn];
      const sourceIndex = getTaskPosition(active.id, activeColumn);

      // Remove the item from source column and add it to target column
      const movedTask = sourceTasks[sourceIndex];
      sourceTasks.splice(sourceIndex, 1);
      targetTasks.push(movedTask);

      setColumns(prevColumns => ({
        ...prevColumns,
        [activeColumn]: sourceTasks,
        [overColumn]: targetTasks
      }));
    }
  }
    const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState(
    [ {id: 1, title: "Add test"},
      {id: 2, title: "to the"},
      {id: 3, title: "other test"},
    ]
  )
  return (
    <>
    
      <div className="HomesBox1">
        <h1>Orders</h1>
      </div>
      <div className="HomesBox2">     
          <div className="HomesBoxe1">
            <div className="HomesBoxes1">
              <h2>🤵 Ordered</h2>
            </div>
            <div className="HomesBoxes2">
            <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
              <Input onSubmit={addTask} />
              <Column tasks={columns.ordered} columnName="ordered" />
            </DndContext>
            </div>
          </div>

          <div className="HomesBoxe2">
            <div className="HomesBoxes1">
              <h2>👩‍🍳 Preparing</h2>
            </div>
            <div className="HomesBoxes2">
              <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <Column tasks={columns.preparing} columnName="preparing" />
              </DndContext>
            </div>
          </div>
          <div className="HomesBoxe3">
            <div className="HomesBoxes1">
              <h2>👩‍💼 Served</h2>
            </div> 
            <div className="HomesBoxes2">
              <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <Column tasks={columns.served} columnName="served" />
              </DndContext>
            </div> 
          </div>
      </div>

      {/* Toggle Help */}
      <div className='ExtraBtnsGrid'>
        <div className='OrdersBtn1'>
          {!isHelpOpen && (
            <button className='HelpBtn' onClick={() => setHelpOpen(true)}>
              Help
            </button>
          )}
        </div>

        {isHelpOpen && <OrderHelp setHelpOpenFalse={setHelpOpenFalse} />}

      </div>
    </>
  );
}


export default Orders;
