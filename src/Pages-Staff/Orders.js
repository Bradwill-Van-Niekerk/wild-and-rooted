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

  const addTask = ( title ) => {
    setTasks((tasks) =>
      [...tasks, { id: tasks.length + 1 , title }]
    );
  };
  //vert
  const getTaskPositionY = id => tasks.findIndex(task => task.id === id)
  
  const [tasks, setTasks] = useState([ 
    {id: 1, title: "Pizza"},
    {id: 2, title:"chicken"},
    {id: 3, title: "24 Wings"},

    ]
  )
  const handleDragEnd = event => {
    const {active, over} = event;
 
    if(active.id === over.id) return; //no change if the items dropped in the same place
    
    setTasks( tasks =>{
      const originalPosition = getTaskPositionY(active.id)
      const newPosition = getTaskPositionY(over.id)
    
      return arrayMove(tasks, originalPosition, newPosition)
    })
  }
    const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
  //horizontal
  // const getTaskPositionX = id => tasks.findIndex(task => task.id === id)
  
  // const [tasks, setTasks] = useState([ 
  //   {id: 1, title: "Pizza"},
  //   {id: 2, table: "", drinks: "", starter: "", main: ""},
  //   {id: 3, title: "24 Wings"},

  //   ]
  // )
  // const handleDragEnd = event => {
  //   const {active, over} = event;
 
  //   if(active.id === over.id) return; //no change if the items dropped in the same place
    
  //   setTasks( tasks =>{
  //     const originalPosition = getTaskPosition(active.id)
  //     const newPosition = getTaskPosition(over.id)
    
  //     return arrayMove(tasks, originalPosition, newPosition)
  //   })
  // }

  // not being used yet
  // const [columnTasks, setColumnTasks] = useState([
  //    {Order: }
  // ])


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
              <Column tasks={tasks}/>
            </DndContext>
            </div>
          </div>
 
          <div className="HomesBoxe2">
            <div className="HomesBoxes1">
              <h2>👩‍🍳 Preparing</h2>
            </div>
            <div className="HomesBoxes2">
              <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                {/* <Column tasks={columns.tasks} /> */}
              </DndContext>
            </div>
          </div>
          <div className="HomesBoxe3">
            <div className="HomesBoxes1">
              <h2>👩‍💼 Served</h2>
            </div>
            <div className="HomesBoxes2">
              <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                {/* <Column tasks={columns.tasks} /> */}
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