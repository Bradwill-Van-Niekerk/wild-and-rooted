import { SortableContext,verticalListSortingStrategy } from "@dnd-kit/sortable"
import Tasks from "./Tasks"

function Column({ tasks, columnName}){
  return (
  <div className='column'>
    <h3>{columnName}</h3>
    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      {tasks.map((task) => (
        <div key={task.id}>
          <Tasks id={task.id} title={task.title} column={columnName} key={task.id}/>
        </div> 
      ))}
    </SortableContext>
  </div>)
}

export default Column