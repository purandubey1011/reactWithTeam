
import Create from "@/components/Create"
import Show from "@/components/Show"
import React, { useState } from "react"

const index = () => {
  
  const [tasks, settasks] = useState([])
  

  return (
    <div className='container mt-5 p-5 bg-light'>
      
    <Create tasks={tasks} settasks={settasks}/>
    <Show tasks={tasks} settasks={settasks}/>
    
     
    </div>
  )
}

export default index