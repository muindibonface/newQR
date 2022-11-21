import { useState } from "react"
import { useDispatch} from 'react-redux'
import {addItems} from './User'


export const useAlert=()=> {

    const [getAlert, setGetAlert] = useState(null)
    const dispatch = useDispatch()
    const onGet =(name, price)=> {
        dispatch(addItems({name: name, many: 1, price: price, initiaPrice: price}))
        setGetAlert('added to list')
        setTimeout(() => {
            setGetAlert(null)
        }, 2000);
    }

    return [getAlert, onGet]

}