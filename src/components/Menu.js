import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <Link to='beer'>beer</Link>
        <Link to='spirit'>spirit</Link>
        <Link to='noalcohol'>noalcohol</Link>
        <Link to='kitchen'>kitchen</Link>  
    </>
  )
}

export default Menu