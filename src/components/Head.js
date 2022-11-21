import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Head = () => {
  const navigate = useNavigate()
  const [tog, setTog] = useState(false)
  return (
    <div>
        <h1 onDoubleClick={()=> setTog(to => !to) }
          style={{border: ' 1px solid #ffe6e6',fontSize: '20px', cursor: 'pointer' ,color: 'black', marginTop: '0', padding: '10px', textAlign: 'center'}}>
            AMBIANCE
        </h1>
        <p onClick={()=> navigate('/sign-in')}
          style={{position: 'absolute', cursor: 'pointer',top: '10px', right: '10px', display: tog ? 'block': 'none'}} >
            ADMIN
        </p>
    </div>
  )
}

export default Head