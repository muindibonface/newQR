import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='contact'>
            <h1 style={{color: 'black', marginBottom: '40px'}}>CONTACT</h1>
            <div className='contactDisplay'>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p style={{textDecoration: 'none', color: '#998200', fontSize: '20px'}}>ambiancelagos@gmail.com</p>
                <p style={{textDecoration: 'none', color: '#998200', marginTop: '15px', fontSize: '20px'}}>+234 8183413934</p>
                {/* <a href='https://wa.me/message/XNL2WYNHVTZKN1' style={{textDecoration: 'none', color: '#ff0000', marginTop: '15px', fontSize: '20px'}}>WHATSAPP</a> */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact