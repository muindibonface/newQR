import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increaseItem, decreaseItem, deleteItem, emptyArray} from '../User'
import {FaTrash} from 'react-icons/fa'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CartList = () => {


const itemList = useSelector((state)=> state.users.value)


const dispatch = useDispatch()
const navigate = useNavigate()

const [orderStatus, setOrderStatus] = useState({
    res: null,
    loading: false,
    error: null
})
const [roomOrTable_number, setRoomOrTable_number] = useState('')
const [hideNum, setHideNum] = useState(false)
const myOrder =async()=>{

    if (roomOrTable_number === '') {
        setHideNum(true)
    } else {
        if (roomOrTable_number !== undefined && roomOrTable_number !== '') {
            setOrderStatus({
                res: null,
                loading: true,
                error: null
            })
            try {
                let payload = {itemList, roomOrTable_number}
                let res = await axios({
                    url: 'https://menu-menu.vercel.app/sendMessage',
                    method: 'post',
                    data: payload
                })

                setOrderStatus({
                    res: res.data,
                    loading: false,
                    error: null
                })
                setHideNum(false)

                dispatch(emptyArray())

                setTimeout(() =>  navigate('/') , 1500);
            } catch (error) {
                alert(error)
                setOrderStatus({
                    res: 'Error sending your order , Please try again',
                    loading: false,
                    error: null
                })
                setTimeout(() =>  navigate('/') , 1500);
            }
        }

    }
}

try {
    
} catch (error) {
    
}




  return (
    <div className='cartList'>
         <h2>Order List</h2>
        {
            itemList.length > 0 && 

            itemList.map((item, index) => {
                return (
                    <div className='subCartList' key={index} >
                        <p>{item.name} <br/> {item.price} </p>
                        <div className='edit-many' >
                            <p onClick={()=> dispatch(decreaseItem({index, price: item.price,many: item.many }))} >-</p>
                            <p>{item.many}</p>
                            <p onClick={()=> dispatch(increaseItem({index, price: item.price,many: item.many }))} >+</p>
                        </div>
                        <FaTrash className='trash' onClick={()=> dispatch(deleteItem({index}))} />
                        
                    </div>
                )
            })

        }
       
        
       { itemList.length === 0 && <h1 className='myH1' > { orderStatus.res !== null ? orderStatus.res : 'No Order yet' }</h1> }


        {
            itemList.length > 0 &&  (
                <div className='submit'>
                    <div className='subSubmit' onClick={myOrder} >{ orderStatus.loading === false ? 'Place Order' : 'Loading...' }</div>
                </div>

            )
        }


        {
            hideNum && (
                <div className='room_table_number'>
                    <p>Room or Table number</p>
                    <input type='text' placeholder='#...' onChange={(e)=> setRoomOrTable_number(e.target.value)} />
                </div>
            )
        }
        
    </div>
  )
}

export default CartList