import Gallery from '@/components/Gallery'
import React, { useState } from 'react'

const index = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className='container mt-5 p-5 bg-light'>
    <button onClick={()=>{setIsShow(!isShow)}} className='btn btn-dark'>{isShow?"hide":"show"}</button>
    {isShow&&<Gallery/>}
    </div>
  )
}

export default index