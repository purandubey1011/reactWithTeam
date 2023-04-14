import React, { useEffect, useState } from 'react'

const Gallery = () => {

    // const [images, setimages] = useState(null)

    const [username, setUsername] = useState(false)
    const [password, setPassword] = useState(false)

    useEffect(() => {
     console.log('created')

     return ()=>{
        console.log('khatam tata bye bye')
     }
    },[password])
    // once try not to put password in array

    // if(username){
    //     setUsername('john')
    // }else{
    //     setUsername('harry')
    // }
    

  return (

    <ul className='list-group'>

            <h2>Username {username?"john":"anney"}</h2>
            <button onClick={() => setUsername(!username)}>
                Change Username
            </button>
            <h2>Password {password?"123456":"654321"}</h2>
            <button onClick={() => setPassword(!password)}>
                Change Password
            </button>

    </ul>
  )
}

export default Gallery