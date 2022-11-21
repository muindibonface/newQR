import React from 'react'
import { Link } from "react-router-dom"

const MenuUrls = () => {
  return (
    <div>
        <div className='url'>
          <h2 style={{textAlign: 'center', color:'#003300'}}>MENU</h2>
          <div className='menuList'>
            <Link style={{ border:' 1px solid #800080', textAlign: 'center', width: '120px', padding:'10px', textDecoration: 'none', margin: '10px', color: 'black'}} to='beer'>BEER</Link>
            <Link style={{border:'1px solid #ff0000', textAlign: 'center', width: '120px', padding:'10px',textDecoration: 'none', margin: '10px', color: 'black', fontSize: '13px'}} to='spirit'>SPIRIT/VODKA/WINE</Link>
          </div>
          <div className='menuList'>
            <Link style={{border:' 1px solid #800080', textAlign: 'center', width: '120px', padding:'10px',textDecoration: 'none', margin: '10px', color: 'black', fontSize: '13px'}} to='noalcohol'>LITTLE & NON-ALCOHOL</Link>
            <Link style={{border:'1px solid #ff0000', textAlign: 'center', width: '120px', padding:'10px',textDecoration: 'none', margin: '10px', color: '#800080'}} to='kitchen'>KITCHEN</Link>
          </div>
        </div>
    </div>
  )
}

export default MenuUrls