import React from 'react'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useAuth from '../hooks/useAuth';
import { auth } from "../firebase";

function Auth() {
    const{user,isLoggedIn}=useAuth()
    const handleClick=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
          return result
          })
          .catch((error) => {
        console.log(error)
          });
    }
  return (
    <div className='text-white flex flex-col justify-center items-center mt-60'>
    <text className='text-3xl'>Login</text>
    <div className='pt-3'>
   
   {!isLoggedIn&&<button onClick={()=>handleClick()} className='w-52 h-12 border-solid border-white border-2'><i className='fa-brands fa-google'></i><span className='pl-2'>Signin with google</span></button>
   }
    </div>
    
   
</div>
  )
}

export default Auth