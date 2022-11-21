import React, { useState } from 'react'
import {FaEdit, FaTimes} from "react-icons/fa"
import {auth,db} from "../firebase"
import {deleteDoc, updateDoc, doc} from "firebase/firestore"
import {useSelector, useDispatch} from 'react-redux'
import {addItems} from '../User'

const KitchenResult = ({id, name, price}) => {

    //  delete items 
    const deleteItem = async () => {
        await deleteDoc(doc(db, 'kitchen', id))
    }

    //  update the items
    const [newName, setNewName] = useState(name)
    const [newPrice, setnewPrice] = useState(price)
    const updateitems = async (e)=> {
        e.preventDefault();
        try {
            await updateDoc(doc(db, 'kitchen', id), {name: newName, price: newPrice});
        } catch (error) {
            alert(error)
        }
    }
    //  open and close edit 
    const [open, setOpen] = useState(false);
    const onClickFaedit = () => {
        setOpen(setOpe => {
            return !setOpe
        })
    }

    //  open and close font awesome
    const [show, setShow] = useState(false);
    const showFontAwesomes = () => {
        setShow(setSho=> {
             return !setSho
        })
    }

    const dispatch = useDispatch()
    const [getAlert, setGetAlert] = useState(null)
    const onGet =(name, price)=> {
        dispatch(addItems({name: name, many: 1, price: price, initiaPrice: price}))
        setGetAlert('added to list')
        setTimeout(() => {
            setGetAlert(null)
        }, 1000);
    }

  return (
    <div>
        <div onDoubleClick={showFontAwesomes} className='resultFromFirebase'>
            <p style={{width: '170px'}}>{name}</p>
            { !auth.currentUser && <h1 onClick={()=> onGet(name, price) } >get</h1> }
            <span>{price}</span>

            {auth.currentUser && (
                <div className='fontAwesome'>
                    <FaEdit onClick={onClickFaedit} style={{color: 'white', fontSize: '20px'}}/>
                    <FaTimes onClick={()=>deleteItem(id) } style={{color: 'red', fontSize: '20px'}}/>
                </div>
            )}
        </div>
        <div className={ open === true ? 'updateformOpen' : 'updateform' }>
            <FaTimes onClick={onClickFaedit} style={{position: 'absolute', top: '10px', right: '10px', color: 'red', fontSize: '25px'}}/>
            <form onSubmit={updateitems}>
                <input type='text' onChange={(e)=> {setNewName(e.target.value)}} value={newName} />
                <input type='text' onChange={(e)=> {setnewPrice(e.target.value)}} value={newPrice}/>
                <button onClick={onClickFaedit} type='submit'>EDIT</button>
            </form>
        </div>
        { getAlert !== null && <div className='getAlert'>{getAlert}</div> }
    </div>
  )
}

export default KitchenResult