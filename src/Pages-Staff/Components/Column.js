import { SortableContext,verticalListSortingStrategy } from "@dnd-kit/sortable"
import Tasks from "./Tasks"

function Column({ tasks }){
  return (
  <div className='column'>
    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      {tasks.map((task) => (
        <div key={task.id} >
          <Tasks id={task.id} title={task.title} key={task.id} />
        </div> 
      ))}
    </SortableContext>
  </div>)
}

export default Column