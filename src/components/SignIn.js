import React, { useState } from 'react'
import { auth, storage} from "../firebase";
import {signInWithEmailAndPassword, signOut} from "firebase/auth"
import { ref, uploadBytes} from 'firebase/storage'
import {useNavigate} from "react-router-dom"
import { FaSignOutAlt } from 'react-icons/fa';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const navigate = useNavigate()

    const signIn = async(e) => {
    e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const signMeOut =async()=> {
        try {
            await signOut(auth)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


    // uploading to storage
    const [picName, setPicName] = useState('')
    const [picutre, setPicture] = useState('')
    const uploadPic = async(e)=> {
        e.preventDefault()
        if (auth.currentUser) {
            try {
                let refPath = ref(storage, `ads/1`)
                await uploadBytes(refPath, picutre);
                alert('uploaded succefully')
            } catch (error) {
                console.log(error)
                alert(`${error} or poor network connection`)
            }
        } else {
            alert('You are not allowed to upload')
        }
    }
  return (
        <div>
            {auth.currentUser && <FaSignOutAlt onClick={signMeOut} style={{position: 'absolute', right: '10px', top: '10px', fontSize: '22px', color: 'green'}}/> }
            {!auth.currentUser  && (
                <form onSubmit={signIn} className='myFormPic' >
                    <input type='email' placeholder='Email' onChange={(e)=> {setEmail(e.target.value)}} required />
                    <input type='password' placeholder='Password' onChange={(e)=> {setPassword(e.target.value)}} required />
                    <button type='submit' >SIGN IN</button>
                </form>
            ) }

            { auth.currentUser && (
                <form className='myFormPic' onSubmit={uploadPic} >
                    {/* <p style={{color: '#ffd700', margin: '50px 0'}}>Index should be between 1-4</p> */}
                    {/* <input type='number' placeholder='index...' onChange={(e)=> {setPicName(e.target.value)}} required /> */}
                    <input type='file' style={{margin: '20% 0 0 0'}} onChange={(e)=> {setPicture(e.target.files[0])}} placeholder='picture...'/>
                    <button type='submit' >ADD</button>
                </form>
            ) }
        </div>
  )
}

export default SignIn