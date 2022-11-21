import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increaseItem, decreaseItem, deleteItem, emptyArray} from '../User'
import {FaTrash} from 'react-icons/fa'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CartList = () => {


const itemList = useSelector((state)=> state.users.value)
let sum = itemList.reduce((total, num)=> total + num.price, 0 )
console.log(sum)

const dispatch = useDispatch()
const navigate = useNavigate()
const myOrder =async()=>{
    // const formData = new FormData();
    // itemList.forEach(list => {
    //     formData.append('name', list.name)
    //     formData.append('price', list.price)
    //     formData.append('qts', list.many)
    //     console.log(`${list.price} and ${list.name} and ${list.many}`)
    // });
    // const res = await axios.post('http://localhost/sendMessage', )
    // console.log(res.data)
    try {
        let payload = {itemList}
        let res = await axios({
            url: 'http://localhost:80/sendMessage',
            method: 'post',
            data: payload
        })
    alert(res.data)
    dispatch(emptyArray())
    navigate('/')
    } catch (error) {
        console.log(error)
    }
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
       
        
       { itemList.length === 0 && <h1 className='myH1' >No Order yet</h1> }


        {
            itemList.length > 0 &&  (
                <div className='submit'>
                    <div className='subSubmit' onClick={myOrder} >order</div>
                </div>

            )
        }
        
    </div>
  )
}

export default CartList