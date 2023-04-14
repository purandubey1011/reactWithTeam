import { nanoid } from 'nanoid'
import React, { useRef, useState } from 'react'

const Create = (props) => {

    const {tasks,settasks} = props

    const [title, settitle] = useState('')
    const [isError, setisError] = useState(false)

    const buttonelem = useRef(null)

    const createtask =(e)=>{
        e.preventDefault()
        
        // buttonelem.current.classList.add('btn')
        // buttonelem.current.classList.add('btn-dark')
        // buttonelem.current.classList.add('btn','btn-danger','fs-1')
        // console.log(buttonelem.current)

        const task = {
        id:nanoid(),
        title
        }
        // console.log(task)
        settasks([...tasks,task])
        settitle('')
    }

    const titleValidator =(e) =>{
        if(buttonelem.current.value.length===0){
            setisError(false)
            settitle(e.target.value)
            return
        }
        // console.log(e.target.value)
        if(buttonelem.current.value.length>4){
            setisError(false)
        }else{
            setisError(true)
        }
        settitle(e.target.value)

    }

  return (
    <div>
        <form onSubmit={createtask}>
        <input 
        ref={buttonelem}
         type="text"
          placeholder='title' 
          value={title}
        //   onChange={e=>{settitle(e.target.value)}}
        onChange={titleValidator}
          />
          <small className='text-danger'>{isError && "invalid error"}</small>
        <button >get name</button>
        </form>
    </div>
  )
}

export default Create