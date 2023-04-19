import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import {auth, provider} from '../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

 const Login = () => {
 const dispatch = useDispatch();
  const signIn=()=>{
      auth.signInWithPopup(provider)
      .then(({user})=>{
        dispatch (login({
          displayName : user.displayName,
          email : user.email,
          photoUrl : user.photoURL
        }))
      })
      .catch(error=>alert(error.message));
  }


  return (
    <div className='login'>
        <div className="login_components">
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="" />
            <Button variant='contained'  onClick={signIn}>Login</Button>
        </div>
     </div>
  )
}

export default Login