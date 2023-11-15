import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile  } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';
export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setloading]=useState(true)

  const createUser =(email,password)=>{
    setloading(true)
   return createUserWithEmailAndPassword (auth,email,password)
  }
  const loginuser =(email,password)=>{
    setloading(true)
   return signInWithEmailAndPassword (auth,email,password)
  }
  const logOut =()=>{
   setloading(true)
   return signOut  (auth)
  }
const updateUserProfile=(name,photo)=>{
 return updateProfile(auth.currentUser, {
  displayName:name ,photoURL: photo
  })
}

  useEffect(()=>{
    const Unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        
        console.log('user',currentUser)
        if(currentUser){
          axios.post('http://localhost:3000/jwt',{email:currentUser.email})
          .then(data =>{
            console.log(data)
            localStorage.setItem('user',data.data.token)
            setloading(false)
          })
        }
        else{
         localStorage.removeItem('user')
         
      }
    })
    return()=>{
        return Unsubscribe()
    }
  },[])
    const contextInfo={
        user,
       createUser,
       loginuser,
       logOut,
       loading,
       updateUserProfile,
    }
    return (
        <>
          <AuthContext.Provider value={contextInfo}>
          {children}
            </AuthContext.Provider>  
        </>
    );
};

export default AuthProvider;