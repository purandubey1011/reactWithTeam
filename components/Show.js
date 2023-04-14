import React from 'react'

const Show = (props) => {

    const {tasks,settasks} = props

    const DeleteHandler = (id) =>{
        let copytask =  tasks.filter((task)=>task.id!=id)
        settasks(copytask)
        
       }
     
      let rendertask = <h3>no panding task...</h3>
     
      if (tasks.length > 0) {
       rendertask = tasks.map((t) => (
           <li
               key={t.id}
               className="d-flex justify-content-between list-group-item bg-info"
           >
               <span>{t.title}</span>
               <span onClick={() => DeleteHandler(t.id)}>❌</span>
           </li>
       ));
     }

  return (
    <div>
        <ul>
        {rendertask}
        </ul>
    </div>
  )
}

export default Show